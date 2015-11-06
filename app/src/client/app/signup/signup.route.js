'use strict';

(function() {
    angular.module('hmx.signup')
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];
    /* @ngInject */
    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [{
            state: 'signup',
            config: {
                title: 'Regístrate',
                url: '/registrate',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignupController',
                contorllerAs: 'vm'
            }
        }];
    }
})();
