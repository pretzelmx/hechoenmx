'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxNotifications', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      scope: {
        notifications: '='
      },
      controller: Controller,
      controllerAs: 'vm',
      templateUrl: 'app/directives/notifications/hmx-notifications.html'
    };

    Controller.$inject = ['$scope', 'dataservice'];
    /* @ngInject */
    function Controller($scope, dataservice) {
      $scope.showAlert = dataservice.showAlert;
    }

    return directive;
  }
})();
