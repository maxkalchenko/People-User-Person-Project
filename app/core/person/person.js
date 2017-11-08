'use strict';

angular.module('core.people')
  .factory('People', ['$resource',
    function($resource) {
      return $resource('data/:peopleId.json', {peopleId:'@peopleId'});

      return $resource('data/:peopleId.json', {}, {
        queryChildren: {
          method: 'GET',
          params: {
            peopleId: 'children'
          },
          isArray: true
        },
        queryAdults: {
          method: 'GET',
          params: {
            peopleId: 'adults'
          },
          isArray: true
        }
      });
    }
  ]);
