'use strict';

(function() {
  angular.module('hmx.popover')
    .factory('popover', popoverFactory);

  popoverFactory.$inject = ['$rootScope', '$q', '$log', '$timeout'];
  /* @ngInject */
  function popoverFactory($rootScope, $q, $log, $timeout) {
    var currentOpen = '';
    var service = {
      current: {},
      toggle: toggle,
      open: open,
      close: close
    };

    init();

    return service;

    function toggle(popoverId) {
      var open = !service.current[popoverId];

      service.current = {};

      service.current[popoverId] = open;
      currentOpen = open ? popoverId : '';
    }

    function open(popoverId) {
      service.current[popoverId] = true;
      currentOpen = popoverId;

      if (!$rootScope.$$phase) {
        $rootScope.$apply();
      };
    }

    function close(popoverId) {
      service.current = {};

      if (!$rootScope.$$phase) {
        $rootScope.$apply();
      };
    }

    function init() {
      document.onclick = function(event) {
        var elementId = event.target.id;
        var parentId = event.target.parentElement && event.target.parentElement.id;

        if (elementId !== currentOpen && parentId !== currentOpen) {
          close(currentOpen);
        }
      }
    }
  }
})();
