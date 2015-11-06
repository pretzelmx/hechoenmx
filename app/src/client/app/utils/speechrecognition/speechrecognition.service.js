'use strict';

(function() {
  angular.module('hmx.speechrecognition')
    .factory('speechrecognition', factory);

  factory.$inject = ['$rootScope', '$q'];
  /* @ngInject */
  function factory($rootScope, $q) {
    var recognizing = false;
    var recognition;

    var speechrecognition = {
      available: !!window.webkitSpeechRecognition,
      toggle: speechRecognition
    };

    if (speechrecognition.available) {
      var WSR = window.webkitSpeechRecognition;

      recognition = new WSR();
      recognition.lang = 'es-MX';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = function() {
        recognizing = true;
        $rootScope.$broadcast('recognizing:change', recognizing);
        if (!$rootScope.$$phase) {
          $rootScope.$apply();
        };
      };

      recognition.onend = function() {
        recognizing = false;
        $rootScope.$broadcast('recognizing:change', recognizing);
        if (!$rootScope.$$phase) {
          $rootScope.$apply();
        };
      };
    }

    function speechRecognition(event) {
      var deferred = $q.defer();
      var promiseState;

      if (speechrecognition.available) {
        if (recognizing) {
          recognition.stop();

          return deferred.promise;
        }

        recognition.start();

        recognition.onerror = function(event) {
          deferred.reject(event.error);
        };

        recognition.onresult = function(event) {
          var finalTranscript = '';
          var interimTranscript = '';

          if (event.results === undefined) {
            return recognition.stop();
          }

          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          if (promiseState === undefined) {
            promiseState = angular.copy(deferred.promise.$$state);
          }

          angular.extend(deferred.promise.$$state, promiseState)

          if (finalTranscript) {
            deferred.resolve(finalTranscript);
          } else {
            deferred.resolve(interimTranscript);
          }

          recognition.stop();
        };
      }

      return deferred.promise;
    }

    return speechrecognition;
  }
})();
