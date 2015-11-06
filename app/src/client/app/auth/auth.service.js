'use strict';

(function() {
  angular.module('hmx.auth')
    .factory('auth', factory);

  factory.$inject = ['$rootScope', '$http', '$q', '$log', '$timeout', '$state', 'UserModel'];
  /* @ngInject */
  function factory($rootScope, $http, $q, $log, $timeout, $state, User) {
    var service = {
      login: login,
      logout: logout
    };

    return service;

    ///////////////

    function login(credentials) {
      var deferred = $q.defer();

      User.login(credentials, function(token) {
        $rootScope.user = token.user;
        $rootScope.accessToken = token;
        $log.info(token);
        deferred.resolve(token.user);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function logout() {
      User.logout({
        access_token: $rootScope.accessToken.id
      }, function(response) {
        $rootScope.user = {};
        $rootScope.accessToken = {};
        $state.go('home');
      }, function(error) {
        $log.error(error);
      })
    }
  }
})();

window.actors = [{
  id: 'jdhbkgbfs48u7ygt598udhgf',
  name: 'Clip',
  type: 'startup',
  activity: 'Desarrollo Web y Móvil',
  slogan: 'Libera tu negocio',
  slug: 'clip.mx',
  avatar: 'images/clip.jpg',
  cover_page: 'images/cover-page-4.jpg',
  email: 'help@clip.mx',
  followers: 43,
  visits: 1563,
  phones: [{
    type: 'Tel.',
    country: 52,
    area: 55,
    number: 63932323
  }],
  links: [{
    type: 'Twitter',
    name: '@clip_mx',
    href: 'https://twitter.com/clip_mx'
  }, {
    type: 'Facebook',
    name: 'Clip',
    href: 'https://www.facebook.com/clipmx'
  }, {
    type: 'Youtube',
    name: 'Clip',
    href: 'https://www.youtube.com/user/clipmx/'
  }],
  expertice: [],
  location: {
    city: 'Ciudad de México',
    state: 'Miguel Hidalgo',
    country: 'México',
    latitude: 19.431903,
    longitude: -99.186022
  },
  owners: [],
  projects: [],
  team: [],
  stack: []
}, {
  id: 'askdbajsjda8a9sd8asd',
  name: 'Pretzel',
  type: 'startup',
  activity: 'Desarrollo Web y Móvil',
  slug: 'pretzel.mx',
  avatar: 'images/pretzel.png',
  cover_page: 'images/pretzel-cover-page.png',
  email: 'hola@pretzel.mx',
  description: 'Somos una startup joven enfocada al desarrollo de ideas y productos tecnológicos con impacto social.<br><br>Fuimos finalistas del reto #Reto071 y ExperTIC.',
  followers: 6,
  visits: 2347,
  phones: [{
    type: 'Tel.',
    country: 52,
    area: 667,
    number: 7133396
  }, {
    type: 'Cel.',
    country: 52,
    area: 667,
    number: 2395729
  }],
  links: [{
    type: 'Sitio web',
    name: 'pretzel.mx',
    href: 'http://pretzel.mx'
  }, {
    type: 'Twitter',
    name: '@pretzelmx',
    href: 'https://twitter.com/pretzelmx?lang=es'
  }, {
    type: 'Github',
    name: 'Pretzel',
    href: 'https://github.com/pretzelmx'
  }, {
    type: 'Facebook',
    name: 'Pretzel',
    href: 'https://www.facebook.com/pretzelmx'
  }],
  expertice: [],
  birthday: '2013-06-13',
  location: {
    city: 'Culiacán',
    state: 'Sinaloa',
    country: 'México',
    latitude: 24.788680,
    longitude: -107.397897
  },
  owners: ['563c21f5c0a0ccd13627b08c', '563c1d19c8157b10367c4def'],
  projects: [],
  team: ['563c21f5c0a0ccd13627b08c', '563c1d19c8157b10367c4def'],
  habilities: [{
    name: 'AngularJS',
    image: 'images/angularjs.png'
  }, {
    name: 'HTML5',
    image: 'images/html5.png'
  }, {
    name: 'CSS3',
    image: 'images/css3.png'
  }, {
    name: 'Gulp',
    image: 'images/gulp.png'
  }, {
    name: 'Polymer',
    image: 'images/polymer.png'
  }, {
    name: 'Sass',
    image: 'images/sass.png'
  }, {
    name: 'MongoDB',
    image: 'images/mongodb.png'
  }, {
    name: 'NodeJS',
    image: 'images/nodejs.png'
  }],
  stack: []
}, {
  id: 2,
  name: 'Zolvers',
  type: 'startup',
  slug: 'zolvers',
  avatar: 'images/zolvers.png',
  cover_page: 'images/cover-page-1.jpg',
  followers: 6,
  visits: 2347,
  phones: [],
  links: [],
  expertice: [],
  location: {
    city: 'Tampico',
    state: 'Tamaulipas',
    country: 'México',
    latitude: 22.231953,
    longitude: -97.861364
  },
  owners: ['563c1d19c8157b10367c4def'],
  projects: [],
  team: [],
  stack: []
}, {
  id: 3,
  name: '500 Startups',
  type: 'investor',
  slug: 'clicw.mx',
  avatar: 'images/500.png',
  cover_page: 'images/cover-page-4.jpg',
  followers: 6,
  visits: 2347,
  phones: [],
  links: [],
  expertice: [],
  location: {
    city: 'Ciudad de México',
    state: 'Distrito Federal',
    country: 'México',
    latitude: 19.416436,
    longitude: -99.164666
  },
  owners: [],
  projects: [],
  team: [],
  stack: []
}, {
  id: 4,
  name: 'Boletia',
  type: 'startup',
  slug: 'boletia',
  avatar: 'images/boletia.png',
  cover_page: 'images/cover-page-2.png',
  followers: 6,
  visits: 2347,
  phones: [],
  links: [],
  expertice: [],
  location: {
    city: 'Mochis',
    state: 'Sinaloa',
    country: 'México',
    latitude: 19.418921,
    longitude: -99.146119
  },
  owners: [],
  projects: [],
  team: [],
  stack: []
}];

window.users = [{
  id: '563c21f5c0a0ccd13627b08c',
  username: 'cesar',
  name: 'César Tolosa Franco',
  email: 'cesar@pretzel.mx',
  password: '12345678',
  type: 'startup_member',
  avatar: 'images/cesar-tolosa.png',
  cover_page: 'images/cesar-tolosa-cover-page.png',
  followers: 6,
  visits: 2347,
  phones: [],
  birthday: '1990-10-30',
  location: {
    city: 'Culiacán',
    state: 'Sinaloa',
    country: 'México',
    latitude: 24.788680,
    longitude: -107.397897
  },
  jobs: [{
    startdate: '2013-08-06',
    name: 'Web Developer',
    org: {
      name: 'Pretzel',
      slug: 'pretzel.mx'
    }
  }],
  expertice: [{
    type: 'academic',
    title: 'Graduado del Centro de Enseñanza del Idioma Inglés',
    date: '2012-06-15',
    doc: ''
  }, {
    type: 'certification',
    title: 'Certificado Inglés C1 por Trinity College London',
    date: '2013-02-15',
    doc: ''
  }, {
    type: 'business',
    title: 'Web Developer en ClickBalance',
    date: '2014-05-02',
    doc: ''
  }, {
    type: 'accreditation',
    title: 'Finalista en reto público #Reto071 CFE Móvil',
    date: '2014-09-02',
    doc: ''
  }, {
    type: 'accreditation',
    title: 'Finalista en reto públicoExperTIC',
    date: '2014-11-02',
    doc: ''
  }, {
    type: 'certification',
    title: 'Certificado en Adwords por Google Adwords',
    date: '2015-03-15',
    doc: 'images/google-adwords.png'
  }],
  habilities: [{
    name: 'AngularJS',
    image: 'images/angularjs.png'
  }, {
    name: 'HTML5',
    image: 'images/html5.png'
  }, {
    name: 'CSS3',
    image: 'images/css3.png'
  }, {
    name: 'Gulp',
    image: 'images/gulp.png'
  }, {
    name: 'Polymer',
    image: 'images/polymer.png'
  }, {
    name: 'Sass',
    image: 'images/sass.png'
  }, {
    name: 'MongoDB',
    image: 'images/mongodb.png'
  }, {
    name: 'NodeJS',
    image: 'images/nodejs.png'
  }],
  links: [{
    type: 'Twitter',
    name: '@cegasus',
    href: 'https://twitter.com/cegasus?lang=es'
  }, {
    type: 'Github',
    name: 'Cesartolsoa',
    href: 'https://github.com/cesartolsoa'
  }, {
    type: 'Facebook',
    name: 'Cesar Tolosa Franco',
    href: 'https://www.facebook.com/cesar.tolosafranco'
  }],
  owners: ['563c21f5c0a0ccd13627b08c']
}, {
  id: '563c1d19c8157b10367c4def',
  isername: 'jesus',
  name: 'Jesús Amado Ruiz Lopez',
  email: 'jesus@pretzel.mx',
  password: '12345678',
  type: 'startup_member',
  avatar: 'images/jesus-ruiz.png',
  cover_page: 'images/jesus-ruiz-cover-page.png',
  followers: 16,
  visits: 2642,
  phones: [],
  links: [],
  expertice: [],
  owners: ['0987654321']
}];
