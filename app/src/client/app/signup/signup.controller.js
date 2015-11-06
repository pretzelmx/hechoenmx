'use strict';

(function() {
  angular.module('hmx.signup')
    .controller('SignupController', Controller);

  Controller.$inject = ['$scope', '$state', '$stateParams', '$log', '$mdDialog'];
  /* @ngInject */
  function Controller($scope, $state, $stateParams, $log, $mdDialog) {
    var vm = this;

    vm.user = {};

    $scope.showAlert = function(ev, title, message, state) {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('body')))
        .clickOutsideToClose(true)
        .title(title || 'Esta es una demostración')
        .content(message)
        .ariaLabel('Diálogo de alerta demostración')
        .ok('cerrar')
        .targetEvent(ev)
      ).then(function() {
        
      });
    };

    $scope.showConfirm = function(ev, title, message, state) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title(title || 'Esta es una demostración')
        .content(message)
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Entendido');

      $mdDialog.show(confirm).then(function() {
        if (state) {
          $state.go(state);
        }
      });
    };
  }
})();
