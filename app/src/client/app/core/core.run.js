'use strict';
/*global google:false*/

(function() {
  angular.module('hmx.core')
    .run(moduleRun);

  moduleRun.$inject = ['$rootScope', '$state', '$mdMedia', '$mdSidenav', '$timeout', '$filter', '$window', 'moment', 'routerHelper'];
  /* @ngInject */
  function moduleRun($rootScope, $state, $mdMedia, $mdSidenav, $timeout, $filter, $window, moment, routerHelper) {
    var MEXICO_CITY_LATITUDE = 19.430832;
    var MEXICO_CITY_LONGITUDE = -99.132638;
    var ZOOM_DEFAULT = 4;
    var ZOOM_CLOSE = 13;
    var imagesUrl = {
      accelerator: 'images/place-accelerator.png',
      goverment: 'images/place-goverment.png',
      investor: 'images/place-investor.png',
      startup: 'images/place-startup.png'
    };

    var actorsColor = {
      accelerator: '#f44336',
      goverment: '#607d8b',
      investor: '#43a047',
      startup: '#ffc107'
    };
    
    var search = {
      done: false,
      state: false,
      term: '',
      sidenav: {
        open: $mdMedia('gt-md'),
        locked: $mdMedia('gt-md')
      },
      select: selectActor,
      filters: {},
      view: {
        list: $mdMedia('sm'),
        cards: $mdMedia('gt-sm'),
        toggle: toggleView
      },
      resizeMap: resizeMap,
      mapReady: false,
      results: [],
      filtered: []
    };

    $rootScope.moment = moment;
    $rootScope.actorsColor = actorsColor;
    $rootScope.accessToken = {};
    $rootScope.user = {};
    $rootScope.search = search;
    $rootScope.search.sort = sortSearchFiltered;
    $rootScope.search.restore = restoreOriginalFiltered;
    $rootScope.search.initFilters = initFilters;
    $rootScope.search.updateMapMarkers = updateMapMarkers;
    $rootScope.search.centerMap = centerMap;
    $rootScope.search.sidenav.toggle = toggleSearchSidenav;

    $rootScope.$on('$stateChangeStart', function(event, next, params) {
      // redirect to login page if not logged in
      $rootScope.state = {};
      $rootScope.state[next.name] = true;

      if (next.authenticate && !($rootScope.user && $rootScope.user._id)) {
        event.preventDefault(); //prevent current page from loading
        $state.go('login');
      }
    });

    function initFilters() {
      $rootScope.search.filters = {};
    };

    function centerMap(latitude, longitude) {
      var gmap = document.querySelector('google-map');

      gmap.zoom = latitude && longitude ? ZOOM_CLOSE : ZOOM_DEFAULT;
      gmap.latitude = latitude || MEXICO_CITY_LATITUDE;
      gmap.longitude = longitude || MEXICO_CITY_LONGITUDE;
    }

    function getInfoWindow(actor) {
      var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + actor.name + '</h1>' +
        '<div id="bodyContent">' +
        '<img src="' + actor.avatar + '" style="height: 48px; width: 48px;">' +
        '</div>' +
        '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      return infowindow;
    }

    function getMarkerImage(actor) {
      var imageUrl = imagesUrl[actor.type];
      var markerImage = new google.maps.MarkerImage(imageUrl, new google.maps.Size(24, 32));

      return markerImage;
    }

    function updateMapMarkers() {
      var markers = [];
      var clusterer = document.querySelector('google-map-markerclusterer');

      $rootScope.search.filtered.forEach(function(actor) {
        var markerImage = getMarkerImage(actor);
        var marker = new google.maps.Marker({
          position: {
            lat: actor.location.latitude,
            lng: actor.location.longitude
          },
          animation: google.maps.Animation.DROP,
          title: actor.name,
          icon: markerImage
        });

        marker.addListener('click', function() {
          $rootScope.search.select(actor);
        });

        marker.addListener('dblclick', function() {
          $state.go('page', {
            pageId: actor.slug
          });
        });

        markers.push(marker);
      });

      clusterer.markers = markers;
      $rootScope.search.mapReady = true;
    }

    function restoreOriginalFiltered() {
      $rootScope.search.term = '';
      $rootScope.search.filtered = $rootScope.search.results;
    }

    function sortSearchFiltered(order) {
      if (~order) {
        return $rootScope.search.filtered.sort(function(a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }

          return 0;
        });
      }

      $rootScope.search.filtered.sort(function(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }

        return 0;
      });
    }

    function toggleView() {
      $rootScope.search.view.list = $rootScope.search.view.cards;
      $rootScope.search.view.cards = !$rootScope.search.view.list;
      $timeout(resizeMap, 500);
    }

    function resizeMap() {
      var gmap = document.querySelector('google-map');

      if (gmap) {
        gmap.resize();
      }
    }

    function selectActor(actor) {
      $rootScope.search.selected = actor;

      if (actor.location) {
        return centerMap(actor.location.latitude, actor.location.longitude)
      }

      centerMap();
    }

    function toggleSearchSidenav() {
      var sidenav = $mdSidenav('search-options');
      var gmap = document.querySelector('google-map');

      if ($mdMedia('gt-md')) {
        $rootScope.search.sidenav.locked = !$rootScope.search.sidenav.locked;
        
        $timeout(function() {
          gmap.resize();
        }, 500);
      } else {
        $rootScope.search.sidenav.locked = false;

        sidenav.toggle().then(function() {
          gmap.resize();
        });
      }
    }
  }
})();
