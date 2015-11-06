'use strict';

(function() {
  angular.module('hmx.search')
    .controller('SearchController', Controller);

  Controller.$inject = ['$scope', '$state', '$stateParams', '$filter', '$interval', '$window', '$mdMedia', 'dataservice'];
  /* @ngInject */
  function Controller($scope, $state, $stateParams, $filter, $interval, $window, $mdMedia, dataservice) {
    var gmap = document.querySelector('google-map');
    var clusterer = document.querySelector('google-map-markerclusterer');

    gmap.disableDefaultUi = true;
    gmap.addEventListener('api-load', $scope.search.initClusterer);

    var checkApiLoad = $interval(function() {
      if ($scope.search.mapReady) {
        cancelCheckApiLoad();
      } else if ($window.google && $window.google.maps) {
        initClusterer.apply(gmap);
        gmap.resize();
        cancelCheckApiLoad();
      }
    }, 1000);

    $scope.$mdMedia = $mdMedia;
    $scope.$watch(function() {
      return $scope.search.term + JSON.stringify($scope.search.filters);
    }, function() {
      var filters = {
        type: $scope.search.filters.type,
        location: {
          state: $scope.search.filters.state
        }
      };
      
      var filtered = $filter('filter')($scope.search.results, filters);
      
      filtered = $filter('filter')(filtered, $scope.search.term);
      $scope.search.filtered = filtered;

      $scope.search.centerMap();

      if ($scope.search.mapReady) {
        $scope.search.updateMapMarkers();
      }
    });

    function cancelCheckApiLoad() {
      if (angular.isDefined(checkApiLoad)) {
        $interval.cancel(checkApiLoad);
        checkApiLoad = undefined;
      }
    };

    function initClusterer() {
      var self = this;

      clusterer.map = self.map;
      $scope.search.updateMapMarkers();
    }
  }
})();