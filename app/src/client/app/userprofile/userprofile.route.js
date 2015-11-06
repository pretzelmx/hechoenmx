'use strict';

(function() {
  angular.module('hmx.page')
    .run(moduleRun);

  moduleRun.$inject = ['routerHelper', 'dataservice'];
  /* @ngInject */
  function moduleRun(routerHelper, dataservice) {
    routerHelper.configureStates(getStates(), '/');
  }

  function getStates() {
    return [{
      state: 'userprofile',
      config: {
        title: 'Perfil',
        url: '/u/:username/:tabId',
        templateUrl: 'app/userprofile/userprofile.html',
        controller: 'UserprofileController',
        contorllerAs: 'vm',
        resolve: {
          userprofile: getUserprofile
        }
      }
    }];

    getUserprofile.$inject = ['$q', '$stateParams', '$sce', 'dataservice'];
    /* @ngInject */
    function getUserprofile($q, $stateParams, $sce, dataservice) {
      var deferred = $q.defer();

      dataservice.getUserprofile($stateParams.username).then(function(userprofile) {
        if (userprofile.description) {
          userprofile._description = $sce.trustAsHtml(userprofile.description);
        }

        deferred.resolve(userprofile)
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }
})();
