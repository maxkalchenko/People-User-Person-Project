'use strict';

angular.module('myMap')
  .component('myMap', {
    templateUrl: 'map/template.html',
    controller: ['NgMap',
      function MyMapController(NgMap) {
        var self = angular.extend(this, {
          markers: [
            [49.9461277, 36.1722490], 
            [50.0548484, 36.2211308], 
            [50.0064099, 36.3303719]
          ]
        });

      // NgMap.getMap().then(function(map) { console.log(map); });
    }]
  });
