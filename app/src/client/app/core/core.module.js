'use strict';

(function() {
    angular.module('hmx.core', [
        /* Angular modules */
        'ngMaterial',

        /* Cross-app modules */
        'hmx.popover',
        'hmx.data',
        'hmx.auth',
        'hmx.directives',
        'hmx.router',

        /* 3rd-party modules */
        'ui.router'
    ]);
})();
