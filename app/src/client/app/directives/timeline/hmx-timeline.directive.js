'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxTimeline', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      scope: {
        events: '='
      },
      controller: Controller,
      templateUrl: 'app/directives/timeline/hmx-timeline.html'
    };

    Controller.$inject = ['$scope', '$state', '$mdMedia', '$mdDialog', 'moment', 'dataservice'];
    /* @ngInject */
    function Controller($scope, $state, $mdMedia, $mdDialog, moment, dataservice) {
      $scope.moment = moment;
      $scope.$mdMedia = $mdMedia;

      $scope.colors = {
        academic: 'blue-grey',
        accreditation: 'pink',
        business: 'green',
        certification: 'amber'
      };

      $scope.textColors = {
        academic: 'text-white',
        accreditation: 'text-white',
        business: 'text-white',
        certification: 'text-black'
      };

      $scope.icons = {
        academic: 'school',
        accreditation: 'star',
        business: 'work',
        certification: 'verified_user'
      };

      $scope.showDoc = function(ev, doc) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/directives/timeline/doc.html',
            // template: '<md-dialog aria-label=\"Vista de documento\" ng-cloak><md-toolbar><div class=md-toolbar-tools><h2>Evidencia de Experiencia</h2><span flex></span><md-button class=md-icon-button ng-click=cancel()><md-icon aria-label=\"cerrar dialogo\">close</md-icon></md-button></div></md-toolbar><md-dialog-content style=\"max-width:800px; max-height:810px;\"><div class=md-dialog-content><img ng-src={{doc}} style=\"margin: auto; max-width: 100%;\"></div></md-dialog-content></md-dialog>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });

        DialogController.$inject = ['$scope', '$mdDialog'];

        function DialogController($scope, $mdDialog) {
          $scope.doc = doc;

          $scope.hide = function() {
            $mdDialog.hide();
          };
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
        }
      };

      // $scope.$watch('events', function() {
      //   $scope.events.sort(function(a, b) {
      //     return a.date < b.date;
      //   });
      // });
      console.log($scope.events);
    }

    return directive;
  }
})();
