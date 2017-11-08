'use strict';

angular.module('maxkalchenko')
  .config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      // $locationProvider.hashPrefix('!');
      $urlRouterProvider
        .otherwise('/people');

      $stateProvider
        .state('map', {
          url: '/map',
          template: '<my-map></my-map>'
        });
    }
  ]);
