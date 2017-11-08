'use strict';

angular.module('maxkalchenko', [
  'ui.router',
  'core',
  'peopleList',
  'myMap',
  'ngMap',
  'userTest'
]).config(function() {
      console.log('Config finished:', self); // 'this' not works - use strict
});
