'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxChats', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      scope: {
        chats: '='
      },
      controller: Controller,
      templateUrl: 'app/directives/chats/hmx-chats.html'
    };

    Controller.$inject = ['$scope', '$state', '$mdMedia', 'dataservice'];
    /* @ngInject */
    function Controller($scope, $state, $mdMedia, dataservice) {
      $scope.showAlert = dataservice.showAlert;
    }

    return directive;
  }
})();
