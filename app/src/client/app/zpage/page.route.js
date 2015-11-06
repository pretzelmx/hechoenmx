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
      state: 'page',
      config: {
        title: 'Perfil',
        url: '/:pageId/:tabId',
        templateUrl: 'app/zpage/page.html',
        controller: 'PageController',
        contorllerAs: 'vm',
        resolve: {
          page: getPage
        }
      }
    }];

    getPage.$inject = ['$q', '$stateParams', '$sce', 'dataservice'];
    /* @ngInject */
    function getPage($q, $stateParams, $sce, dataservice) {
      var deferred = $q.defer();
      // console.log($stateParams.pageId);
      dataservice.getPage($stateParams.pageId).then(function(page) {
        if (page.description) {
          page._description = $sce.trustAsHtml(page.description);
        }

        deferred.resolve(page)
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }
})();
