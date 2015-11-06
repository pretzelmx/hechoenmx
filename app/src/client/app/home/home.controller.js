'use strict';

(function() {
    angular.module('hmx.home')
        .controller('HomeController', Controller);

    Controller.$inject = ['$scope', '$state', '$stateParams'];
    /* @ngInject */
    function Controller($scope, $state, $stateParams) {}
})();
