'use strict';

(function() {
  angular.module('hmx.directives')
    .directive('hmxNavbar', factory);

  function factory() {
    var directive = {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      templateUrl: 'app/directives/navbar/hmx-navbar.html'
    };

    Controller.$inject = ['$scope', '$state', '$stateParams', '$timeout', '$mdMedia', 'routerHelper', 'popover', 'auth', 'dataservice'];
    /* @ngInject */
    function Controller($scope, $state, $stateParams, $timeout, $mdMedia, routerHelper, popover, auth, dataservice) {
      var vm = this;

      vm.popover = popover;
      $scope.menus = getMenus();
      $scope.filters = getFilters();
      $scope.sortOptions = getSortOptions();
      $scope.$mdMedia = $mdMedia;
      $scope.goSearch = goSearch;
      $scope.goBack = goBack;
      $scope.unwatched = {};

      window.s = $scope;

      $scope.$watch('user.id', function(userId) {
        console.log(userId);
        if (userId) {
          dataservice.getPeople(userId).then(function(people) {
            $scope.people = people;
          });
          dataservice.getChats(userId).then(function(chats) {
            $scope.chats = chats;
          });
          dataservice.getNotifications(userId).then(function(notifications) {
            $scope.notifications = notifications;
          });
        };
      });

      $scope.$watch(function() {
        return JSON.stringify($scope.people);
      }, function() {
        if ($scope.people) {
          computeUnwatched('people', $scope.people);
        }
      });
      $scope.$watch(function() {
        return JSON.stringify($scope.chats);
      }, function() {
        if ($scope.chats) {
          computeUnwatched('chats', $scope.chats);
        }
      });
      $scope.$watch(function() {
        return JSON.stringify($scope.notifications);
      }, function() {
        if ($scope.notifications) {
          computeUnwatched('notifications', $scope.notifications);
        }
      });

      $scope.$on('$stateChangeSuccess', function(event, next) {
        var searchState = $state.is('search');

        $scope.mayGoBack = !$state.is('home');
        $scope.search.state = searchState;
        $scope.theme = searchState ? 'navbar-search' : 'default';

        if (searchState) {
          $scope.search.centerMap();
        }
      });

      function computeUnwatched(menu, items) {
        $scope.unwatched[menu] = 0;

        items.forEach(function(item) {
          if (!item.watched) {
            $scope.unwatched[menu]++;
          }
        });
      }

      function getMenus() {
        var menus = [{
          id: 'people',
          icon: 'people',
          aria: 'Personas para contactar',
          offset: '192 50',
          position: 'target-right target',
          width: '4'
        }, {
          id: 'chats',
          icon: 'chat',
          aria: 'Mensajes enviados y recibidos',
          offset: '128 50',
          position: 'target-right target',
          width: '4'
        }, {
          id: 'notifications',
          icon: 'notifications',
          aria: 'Notificaciones de la plataforma',
          offset: '50 50',
          position: 'target-right target',
          width: '4'
        }, {
          id: 'account',
          image: '/images/photos/cesar_tolosa_navbar.jpg',
          aria: 'Cuenta de usuario',
          offset: '0 55',
          position: 'target-right target',
          width: '3'
        }];

        return menus;
      }

      function getFilters() {
        var filters = [{
          id: 'type',
          str: 'Tipo de organizacion',
          options: [{
            value: 'startup',
            str: 'Startup'
          }, {
            value: 'investor',
            str: 'Inversionista'
          }, {
            value: 'accelerator',
            str: 'Aceleradora/Incubadora'
          }, {
            value: 'goverment',
            str: 'Oficina de gobierno'
          }]
        }, {
          id: 'state',
          str: 'Estado',
          options: getStatesOptions()
        }];

        return filters;
      }

      function getSortOptions() {
        var sortOptions = [{
          str: 'De la A-Z',
          icon: 'sort_by_alpha',
          aria: 'Ordenar de la "A" a la "Z"',
          action: function() {
            $scope.search.sort(1);
          }
        }, {
          str: 'De la Z-A',
          icon: 'sort_by_alpha',
          aria: 'Ordenar de la "Z" a la "A"',
          action: function() {
            $scope.search.sort(-1);
          }
        }, {
          str: 'Orden inicial',
          icon: 'restore',
          action: function() {
            $scope.search.restore();
          }
        }];

        return sortOptions;
      }

      function goBack() {
        if (!routerHelper.stateCounts.changes) {
          return $state.go('home');
        }
        window.history.back();
      }

      function goSearch() {
        $state.go('search');
      }

      function getStatesOptions() {
        var states = dataservice.getMexicanStates();
        var options = [];

        states.forEach(function(state) {
          options.push({
            str: state,
            value: state
          });
        });

        return options;
      }
    }

    return directive;
  }
})();
