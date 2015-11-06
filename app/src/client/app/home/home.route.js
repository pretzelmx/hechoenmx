'use strict';

(function() {
    angular.module('hmx.home')
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];
    /* @ngInject */
    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [{
            state: 'home',
            config: {
                url: '/',
                title: 'Inicio',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController'
            }
        }];
    }
})();
