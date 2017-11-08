'use strict';

angular.module('peopleList')
  .filter('Capitalize', function() {
    return function(str) {
    	// str = str.toLowerCase();
    	str = str.toString().split('');
    	str[0] = str[0].toUpperCase();

       	return str.join('');
       };
  });
