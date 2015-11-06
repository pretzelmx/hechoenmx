'use strict';

(function() {
  angular.module('hmx.login')
    .controller('LoginController', Controller);

  Controller.$inject = ['$scope', '$state', '$stateParams', '$log', '$interval', '$mdDialog', 'auth'];
  /* @ngInject */
  function Controller($scope, $state, $stateParams, $log, $interval, $mdDialog, auth) {
    var vm = this;

    $scope.credentials = {};
    $scope.login = login

    function login() {
      $scope.waiting = true;

      auth.login($scope.credentials).then(function(user) {
        $scope.credentials = {};
        $scope.waiting = false;
        $state.go('home');
      }, function(error) {
        $scope.waiting = false;
        credentials.password = '';
        showAlert();
      });
    }

     function showAlert() {
      var alert = $mdDialog.alert({
        title: 'Ooops no has podido acceder',
        content: 'Usuario o contraseña incorrectos',
        ok: 'cerrar'
      });
      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }
  }
})();
