'use strict';

(function() {
  angular.module('hmx.page')
    .controller('UserprofileController', Controller);

  Controller.$inject = ['$scope', '$state', '$stateParams', '$log', '$mdDialog', '$window', 'moment', 'dataservice', 'userprofile'];
  /* @ngInject */
  function Controller($scope, $state, $stateParams, $log, $mdDialog, $window, moment, dataservice, userprofile) {
    var selected = null;
    var previous = null;
    var imagesUrl = {
      accelerator: 'images/place-accelerator.png',
      goverment: 'images/place-goverment.png',
      investor: 'images/place-investor.png',
      startup: 'images/place-startup.png',
      angular: 'images/angular.png',
      css3: 'images/css3.png',
      docker: 'images/docker.png',
      gulp: 'images/gulp.png',
      html5: 'images/html-5.png',
      javascript: 'images/javascript.png',
      mongodb: 'images/mongodb.png',
      nodejs: 'images/nodejs.png',
      polymer: 'images/polymer.png',
      react: 'images/react.png',
      redis: 'images/redis.png',
      rethinkdb: 'images/rethinkdb.png',
      sass: 'images/sass.png',
      php: 'images/php.png',
      mysql: 'images/mysql.png'
    };

    $scope.imagesUrl = imagesUrl;
    $scope.userprofile = userprofile;
    $scope.showActions = true;
    $scope.filters = {};
    $scope.dates = {
      initial: '',
      final: ''
    };
    $scope.filtered = {
      expertice: []
    };
    $scope.canEdit = canEdit();
    $scope.tabs = getTabs();
    $scope.showAlert = function(ev, title, message) {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('body')))
        .clickOutsideToClose(true)
        .title(title || 'Esta es ina demostración')
        .content(message)
        .ariaLabel('Diálogo de alerta demostración')
        .ok('cerrar')
        .targetEvent(ev)
      );
    };

    $scope.tabs.forEach(function(tab, i) {
      if ($stateParams.tabId === tab.id) {
        $scope.selectedIndex = i;
      }
    });

    if (!$scope.selectedIndex) {
      $scope.selectedIndex = 0;
    }

    $scope.$watch('selectedIndex', function(current, old) {
      previous = selected;
      selected = $scope.tabs[current];

      $state.go('userprofile', {
        username: $stateParams.username,
        tabId: selected.id
      });
    });

    $scope.toggleAllAreas = function() {
      var select = !$scope.filters.accreditation && !$scope.filters.academic && !$scope.filters.business && !$scope.filters.certification;

      if (select) {
        $scope.filters = {
          accreditation: true,
          academic: true,
          business: true,
          certification: true
        };
      } else {
        $scope.filters = {};
      }
    };

    $scope.toggleAllAreas();

    $scope.$watch(function() {
      return JSON.stringify($scope.filters) + moment($scope.dates.initial).format() + moment($scope.dates.final).format();
    }, function() {
      console.log($scope.dates);
      $scope.filtered.expertice = [];

      $scope.userprofile.expertice.forEach(function(event) {
        var add = false
        if ($scope.filters[event.type]) {
          add = true;
        } else if ($scope.dates.initial && moment($scope.dates.initial).isValid()) {
          if ($scope.dates.final && moment($scope.dates.final).isValid()) {
            add = moment($scope.dates.initial).format('YYYY-MM-DD') <= event.date && moment($scope.dates.final).format('YYYY-MM-DD') >= event.date;
          } else {
            add = moment($scope.dates.initial).format('YYYY-MM-DD') <= event.date;
          }
        } else if ($scope.dates.final && moment($scope.dates.final).isValid()) {
          add = moment($scope.dates.final).format('YYYY-MM-DD') >= event.date;
        }

        console.log(add, event.date, moment($scope.dates.initial).format('YYYY-MM-DD'), moment($scope.dates.final).format('YYYY-MM-DD'));
        if (add) {
          $scope.filtered.expertice.push(event);
        }
      });
    });

    $window.onscroll = function(ev) {
      $scope.showActions = showActions();

      if (!$scope.$$phase) {
        $scope.$apply();
      }
    };

    function canEdit() {
      if (userprofile.id === $scope.user.id) {
        return true;
      }

      return false;
    }

    function showActions() {
      var mdTabs = document.querySelector('md-tabs');
      var mdToolbar = document.querySelector('md-toolbar');

      return mdTabs.offsetTop > ($window.pageYOffset + mdToolbar.offsetHeight);
    }

    function getTabs(userprofile) {
      var personalTabs = [{
        id: 'sobre-mi',
        title: 'sobre mí',
        content: 'app/userprofile/tabs/about.html'
      }, {
        id: 'experiencia',
        title: 'experiencia',
        content: 'app/userprofile/tabs/expertice.html'
      }, {
        id: 'publicaciones',
        title: 'publicaciones',
        content: 'app/userprofile/tabs/publications.html'
      }];

      return personalTabs;
    }
  }
})();
