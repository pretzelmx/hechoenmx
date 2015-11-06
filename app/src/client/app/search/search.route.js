'use strict';

(function() {
    angular.module('hmx.search')
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];
    /* @ngInject */
    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [{
            state: 'search',
            config: {
                title: 'Buscar',
                url: '/buscar',
                templateUrl: 'app/search/search.html',
                controller: 'SearchController'
            }
        }];
    }
})();
