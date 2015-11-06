'use strict';

(function() {
  angular.module('hmx.core')
    .config(config);

  config.$inject = ['$mdThemingProvider'];
  /* @ngInject */
  function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal', {
        'default': '500',
        'hue-1': '200',
        'hue-2': '700',
        'hue-3': '900'
      })
      .accentPalette('red', {
        'default': 'A400'
      })
      .warnPalette('amber');

    $mdThemingProvider.theme('navbar-search')
      .primaryPalette('grey', {
        'default': '100',
        'hue-1': '400',
        'hue-2': '500',
        'hue-3': '900'
      })
      .accentPalette('red', {
        'default': 'A400'
      });
  }
})();
