'use strict';

angular.module('userTest')
  .component('userTest', {
    templateUrl: 'user-test/template.html',
    bindings: {
      personInfo: "<"
    }
  })
  // Pointless:
  .provider('User', UserProvider);

UserProvider.$inject = []

function UserProvider() {
  var self = angular.extend(this, {
     rootUrl: '',
     setRootUrl: setRootUrl,
     $get: ['$q', function($q) {
       return new User(self.rootUrl, $q);
     }]
  });

  console.log('Before config:', self);

   function setRootUrl(url) {
     self.rootUrl = url;
   }
}

function User(rootUrl) {
   var self = angular.extend(this, {
     rootUrl: rootUrl,
     data: {
      nothing: ''
     },
     update: update
   });

   return self;

   function update(something) {
     self.data.nothing = something;

     console.log(this.rootUrl + '/user', self.data);
   }
}
