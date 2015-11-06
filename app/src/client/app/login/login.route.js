'use strict';

(function() {
    angular.module('hmx.login')
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];
    /* @ngInject */
    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                title: 'Iniciar sesión',
                url: '/iniciar-sesion',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                contorllerAs: 'vm'
            }
        }];
    }
})();
