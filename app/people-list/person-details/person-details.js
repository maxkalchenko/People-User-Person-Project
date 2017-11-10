'use strict';

angular.module('peopleList')
  .component('personDetails', {
    templateUrl: 'people-list/person-details/template.html',
    bindings: {
        personInfo: '<',
        getPerson: '&',
        onClose: "&"
    }
  });
