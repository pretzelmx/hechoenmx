'use strict';

(function() {
    angular.module('hmx', [
        /* Shared modules */
        'hmx.core',

        /* Feature areas */
        'hmx.layout',
        'hmx.login',
        'hmx.signup',
        'hmx.home',
        'hmx.search',
        'hmx.page',
        'hmx.userprofile',
        'hmx.actors',

        /* Third party modules */
        'ui.router'
    ]);
})();
