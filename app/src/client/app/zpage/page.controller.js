'use strict';

(function() {
  angular.module('hmx.page')
    .controller('PageController', Controller);

  Controller.$inject = ['$scope', '$state', '$stateParams', '$log', '$mdDialog', '$window', 'dataservice', 'page'];
  /* @ngInject */
  function Controller($scope, $state, $stateParams, $log, $mdDialog, $window, dataservice, page) {
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
    $scope.page = page;
    $scope.showActions = true;
    $scope.canEdit = canEdit();
    $scope.tabs = getTabs(page);
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

      $state.go('page', {
        pageId: $stateParams.pageId,
        tabId: selected.id
      });
    });

    $window.onscroll = function(ev) {
      $scope.showActions = showActions();

      if (!$scope.$$phase) {
        $scope.$apply();
      }
    };

    function canEdit() {
      if (page.slug === $scope.user.slug) {
        return true;
      }

      if (~page.owners.indexOf($scope.user.id)) {
        return true;
      }

      return false;
    }

    function showActions() {
      var mdTabs = document.querySelector('md-tabs');
      var mdToolbar = document.querySelector('md-toolbar');

      return mdTabs.offsetTop > ($window.pageYOffset + mdToolbar.offsetHeight);
    }

    function getTeam(teamIds) {

    } 

    function getTabs(page) {
      var organizationTabs = [{
        id: 'acerca-de',
        title: 'acerca de',
        content: 'app/zpage/tabs/about.html'
      }];

      if (page.team && page.team.length) {
        page._team = dataservice.getTeam(page.team);
        organizationTabs.push({
          id: 'equipo',
          title: 'equipo',
          content: 'app/zpage/tabs/team.html'
        });
      }

      if (page.stack && page.stack.length) {
        organizationTabs.push({
          id: 'stack',
          title: 'stack',
          content: 'app/zpage/tabs/stack.html'
        });
      }

      if (page.projects && page.projects.length) {
        organizationTabs.push({
          id: 'proyectos',
          title: 'proyectos',
          content: 'app/zpage/tabs/projects.html'
        });
      }

      return organizationTabs;
    }
  }
})();
