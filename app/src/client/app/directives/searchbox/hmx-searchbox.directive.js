'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxSearchbox', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      scope: {
        media: '=',
        searchTerm: '=',
        onFocus: '=',
        onResults: '='
      },
      controller: Controller,
      templateUrl: 'app/directives/searchbox/hmx-searchbox.html'
    };

    Controller.$inject = ['$scope', '$state', '$mdMedia', '$timeout', 'dataservice', 'speechrecognition'];
    /* @ngInject */
    function Controller($scope, $state, $mdMedia, $timeout, dataservice, speechrecognition) {
      var DONE = '';
      var LOADING = 'indeterminate';
      var searchDone = false;
      var previousSearchTerm = '';
      var input = document.getElementById('hmx-searchbox-input');

      input.onfocus = getActors;
      $scope.$searchTerm = '';
      $scope.$mdMedia = $mdMedia;
      $scope.focusInput = focusInput;
      $scope.clearInput = clearInput;
      $scope.speechRecognitionAvailable = speechrecognition.available;
      $scope.toggleRecognize = toggleRecognize;

      if ($state.is('search')) {
        focusInput();
      }

      $scope.$on('recognizing:change', function(event, recognizing) {
        $scope.recognizing = recognizing;
      });

      $scope.$watch('searchTerm', function(searchTerm) {
        if (previousSearchTerm) {
          if (!searchTerm && !$scope.showMic) {
            showMic();
          }
        } else {
          if (searchTerm && !$scope.showClose) {
            showClose();
          } else if(!$scope.showMic) {
            showMic();
          }
        }

        previousSearchTerm = searchTerm;
      });

      function showClose() {
        $scope.showMic = false;

        $timeout(function() {
          $scope.showClose = true;
        }, 500);
      }

      function showMic() {
        $scope.showClose = false;

        $timeout(function() {
          $scope.showMic = true;
        }, 500);
      }

      function getActors() {
        $scope.progressMode = LOADING;

        $scope.onFocus();

        if (searchDone) {
          $scope.progressMode = DONE;
          return;
        }

        dataservice.getActors()
          .then(function(actors) {
            searchDone = true;
            $scope.progressMode = DONE;
          });
      };

      function focusInput() {
        input.focus();
      }

      function clearInput() {
        focusInput();

        $scope.searchTerm = '';
      }

      function toggleRecognize(event) {
        focusInput();

        speechrecognition.toggle(event)
          .then(function(transcript) {
            $scope.searchTerm = transcript;
          });
      };
    }

    return directive;
  }
})();
