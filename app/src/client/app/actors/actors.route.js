'use strict';

(function() {
    angular.module('hmx.actors')
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];
    /* @ngInject */
    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'actors',
            config: {
                url: '/actors',
                templateUrl: 'app/actors/actors.html',
                controller: 'ActorsController'
            }
        }];
    }
})();
