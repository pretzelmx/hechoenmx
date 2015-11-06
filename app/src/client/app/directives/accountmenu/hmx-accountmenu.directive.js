'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxAccountmenu', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      scope: {
        user: '='
      },
      controller: Controller,
      templateUrl: 'app/directives/accountmenu/hmx-accountmenu.html'
    };

    Controller.$inject = ['$scope', '$state', '$mdMedia', 'dataservice', 'auth'];
    /* @ngInject */
    function Controller($scope, $state, $mdMedia, dataservice, auth) {
      $scope.logout = auth.logout;
    }

    return directive;
  }
})();