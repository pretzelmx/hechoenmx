'use strict';

(function() {
  if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }

  angular.module('hmx.data')
    .factory('dataservice', factory);

  factory.$inject = ['$rootScope', '$http', '$q', '$timeout', '$mdDialog', 'UserModel'];
  /* @ngInject */
  function factory($rootScope, $http, $q, $timeout, $mdDialog, User) {
    var gettingActors = false;
    var actors = [];
    var service = {
      getPage: getPage,
      getTeam: getTeam,
      getUserprofile: getUserprofile,
      getActors: getActors,
      getPeople: getPeople,
      getChats: getChats,
      getNotifications: getNotifications,
      getMexicanStates: getMexicanStates,
      showAlert: showAlert
    };

    return service;

    ///////////////

    function getPage(pageId) {
      // console.log('getPage:', pageId);

      var deferred = $q.defer();

      $timeout(function() {
        var page;
        var pages = [].concat(actors, window.users);

        // console.log(pages);
        for (var i = 0; i < pages.length; i++) {
          if (pages[i].slug === pageId) {
            page = pages[i];
            break;
          }
        }

        // console.log(page);
        if (page) {
          return deferred.resolve(page);
        }

        // console.log('Not found');

        deferred.reject({
          status: 404,
          data: {
            message: 'Not found'
          }
        });
      }, Math.random() * 1000);

      return deferred.promise;
    }

    function getTeam(teamIds) {
      var team = [];

      teamIds.forEach(function(memberId) {
        window.users.forEach(function(user) {
          if (user.id === memberId) {
            team.push({
              avatar: user.avatar,
              name: user.name,
              username: user.username,
              cover_page: user.cover_page,
              job: 'Web Developer'
            });
          }
        });
      });

      return team;
    }

    function getUserprofile(username) {
      var deferred = $q.defer();

      // User.find({
      //   filter: {
      //     where: {
      //       username: username
      //     }
      //   },
      //   access_token: $rootScope.accessToken.id
      // }, function(results) {
      //   debugger;
      //   deferred.resolve();
      // }, function(error) {
      //   deferred.reject(error);
      // })

      $timeout(function() {
        var userprofile;

        // console.log(pages);
        for (var i = 0; i < window.users.length; i++) {
          if (window.users[i].username === username) {
            userprofile = window.users[i];
            break;
          }
        }

        // console.log(page);
        if (userprofile) {
          return deferred.resolve(userprofile);
        }

        // console.log('Not found');

        deferred.reject({
          status: 404,
          data: {
            message: 'Not found'
          }
        });
      }, Math.random() * 1000);

      return deferred.promise;
    }

    function getActors() {
      var deferred = $q.defer();

      if (actors.length) {
        updateResults(deferred, actors);
      } else if (gettingActors) {
        $rootScope.$watch(function() {
          return actors.length;
        }, function(length) {
          if (length) {
            updateResults(deferred, actors);
          }
        });
      } else {
        gettingActors = true;
        $timeout(function() {
          actors = window.actors;
          updateResults(deferred, actors);
        }, Math.random() * 1000);
      }

      return deferred.promise;
    }

    function updateResults(deferred, results) {
      $rootScope.search.results = results;
      $rootScope.search.filtered = results.slice(0);
      $rootScope.search.done = true;

      if ($rootScope.search.mapReady) {
        $rootScope.search.updateMapMarkers();
      }

      deferred.resolve(results);

      if (!$rootScope.$$phase) {
        $rootScope.$apply();
      };
    }

    function getPeople(userId) {
      var deferred = $q.defer();
      var people = [];

      window.users.forEach(function(user) {
        if (userId !== user.id) {
          people.push({
            avatar: user.avatar,
            name: user.name,
            message: 'Desea contactarse contigo',
            watched: false
          });
        };
      });

      $timeout(function() {
        deferred.resolve(people);
      }, Math.random() * 1000);


      return deferred.promise;
    }

    function getChats(userId) {
      var deferred = $q.defer();
      var chats = [];
      var messages = [
        'Hola cómo has estado?',
        'Interesante proyecto',
        'Claro que si!',
        'Dónde será la reunión?',
        'Envíame la información',
        'Cuándo es la reunión?',
        'Perfecto :D',
        'jajajaja xD'
      ];

      [].concat(window.users, window.actors).forEach(function(actor) {
        if (userId !== actor.id) {
          chats.push({
            avatar: actor.avatar,
            name: actor.name,
            message: messages[Math.floor(Math.random() * messages.length)],
            watched: false
          });
        };
      });

      $timeout(function() {
        deferred.resolve(chats);
      }, Math.random() * 1000);


      return deferred.promise;
    }

    function getNotifications(userId) {
      var deferred = $q.defer();
      var notifications = [];
      var messages = [
        'Te ha mensionado en una publicación',
        'Ha compartido un enlace',
        'Podría interesarse en tu proyecto'
      ];

      [].concat(window.users, window.actors).forEach(function(actor) {
        if (userId !== actor.id) {
          notifications.push({
            avatar: actor.avatar,
            name: actor.name,
            message: messages[Math.floor(Math.random() * messages.length)],
            watched: false
          });
        };
      });

      $timeout(function() {
        deferred.resolve(notifications);
      }, Math.random() * 1000);


      return deferred.promise;
    }

    function showAlert(item, title, message) {
      if (item) {
        item.watched = true;
      }
      var alert = $mdDialog.alert({
        title: title || 'Esta es una demostración',
        content: message || 'En la versión completa se te dirigirá a un recurso real.',
        ok: 'cerrar'
      });
      $mdDialog
        .show(alert)
        .finally(function() {
          alert = undefined;
        });
    }

    function getMexicanStates() {
      var states = [
        'Aguascalientes',
        'Baja California Norte',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Distrito Federal',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas'
      ];

      return states;
    }
  }
})();
