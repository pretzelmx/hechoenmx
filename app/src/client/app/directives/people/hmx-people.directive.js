'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxPeople', factory);

  function factory() {
    var directive = {
      restrict: 'AE',
      scope: {
        people: '='
      },
      controller: Controller,
      templateUrl: 'app/directives/people/hmx-people.html'
    };

    Controller.$inject = ['$scope', '$state', '$mdMedia', 'dataservice'];
    /* @ngInject */
    function Controller($scope, $state, $mdMedia, dataservice) {
      $scope.showAlert = dataservice.showAlert;
    }

    return directive;
  }
})();