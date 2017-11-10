'use strict';

angular.module('peopleList', ['core.people'])
  .config(config);

config.$inject = ["$stateProvider"];

  function config($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/people',
        template: '<people-list></people-list>'
      });
  }
