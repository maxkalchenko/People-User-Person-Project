'use strict';

angular.module('userTest', ['peopleList'])
  .config(config)

config.$inject = ["$stateProvider"];

function config($stateProvider) {
  $stateProvider
    .state('userTest', {
      url: '/people/:userId',
      template: '<user-test person-info="$ctrl.personInfo"></user-test>',
      controller: ['personInfo', "$state", function(personInfo, $state) {
          this.personInfo = personInfo;
      }],
      controllerAs: "$ctrl",
      params: {
        personInfo: null
      },
      data: {
        blah: "20"
      },
      resolve: {
        personInfo: function($q, $stateParams, $http) {
          if ($stateParams.personInfo) {
            return $stateParams.personInfo;
          }

          return getPersonInfo();

          function getPersonInfo() {
            return $q.all([
                $http.get('data/adults.json').then(function(response) {
                    return response.data;
                  }), 
                $http.get('data/children.json').then(function(response) {
                    return response.data;
                  })])
              .then(function(response) {
                var responseData = response[0].concat(response[1]);

                var data = responseData.find(function(element){ 
                  return element.firstName.toLowerCase() === $stateParams.userId.split('-')[0].toLowerCase()
                      && element.lastName.toLowerCase() === $stateParams.userId.split('-')[1].toLowerCase();
                });

                if (!data) {
                  data = {
                    "firstName": $stateParams.userId.split('-')[0],
                    "lastName": $stateParams.userId.split('-')[1],
                    "age": "",
                    "email": $stateParams.userId.split('-')[0] + "." + $stateParams.userId.split('-')[1] + "@gmail.com",
                    "sex": "",
                    "loremIpsum": "Blah-blah."
                  };
                }
                
                return data;
            });
          }
        }
      }
    });
}
