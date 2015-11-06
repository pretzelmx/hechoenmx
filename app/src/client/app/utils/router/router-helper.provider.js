/* Help configure the state-base ui.router */
'use strict';

(function() {
  angular.module('hmx.router')
    .provider('routerHelper', provider);

  provider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
  /* @ngInject */
  function provider($locationProvider, $stateProvider, $urlRouterProvider) {
    /* jshint validthis:true */
    var self = this;
    var config = {
      docTitle: 'HMX',
      resolveAlways: {}
    };

    $locationProvider.html5Mode(true);

    self.configure = function(cfg) {
      angular.extend(config, cfg);
    };

    self.$get = RouterHelper;

    RouterHelper.$inject = ['$rootScope', '$state', '$location' /*, 'logger'*/ ];
    /* @ngInject */
    function RouterHelper($rootScope, $state, $location) {
      var handlingStateChangeError = false;
      var hasOtherwise = false;
      var stateCounts = {
        errors: 0,
        changes: 0
      };

      var service = {
        configureStates: configureStates,
        getStates: getStates,
        stateCounts: stateCounts
      };

      init();

      return service;

      ///////////////

      function configureStates(states, otherwisePath) {
        angular.forEach(states, function(state) {
          state.config.resolve =
            angular.extend(state.config.resolve || {}, config.resolveAlways);
          $stateProvider.state(state.state, state.config);
        });
        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      function handleRoutingErrors() {
        // Route cancellation:
        // On routing error, go to the dashboard.
        // Provide an exit clause if it tries to do it twice.
        $rootScope.$on('$stateChangeError',
          function(event, toState, toParams, fromState, fromParams, error) {
            if (handlingStateChangeError) {
              return;
            }
            stateCounts.errors++;
            handlingStateChangeError = true;
            // var msg = formatErrorMessage(error);
            // logger.warning(msg, [toState]);
            $location.path('/');

            // function formatErrorMessage(error) {
            //     var dest = (toState && (toState.title || toState.name ||
            //                             toState.loadedTemplateUrl)) || 'unknown target';
            //     return 'Error routing to ' + dest + '. ' +
            //         error.message || error.data || '' +
            //         '. <br/>' + (error.statusText || '') +
            //         ': ' + (error.status || '');
            // }
          }
        );
      }

      function init() {
        handleRoutingErrors();
        handleStateChangeSuccess();
      }

      function getStates() {
        return $state.get();
      }

      function handleStateChangeSuccess() {
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
          stateCounts.changes++;
          handlingStateChangeError = false;
          var title = config.docTitle + ' | ' + (toState.title || '');
          $rootScope.title = title; // data bind to <title>
        });
      }
    }
  }
})();
