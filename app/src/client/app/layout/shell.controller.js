'use strict';

(function() {
  angular.module('hmx.layout')
    .controller('ShellController', Controller);

  Controller.$inject = ['$scope', '$state', '$mdSidenav', 'dataservice'];
  /* @ngInject */
  function Controller($scope, $state, $mdSidenav, dataservice) {
  	dataservice.getActors();
  }
})();
