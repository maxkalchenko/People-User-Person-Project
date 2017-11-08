'use strict';

angular.module('peopleList')
  .component('peopleList', {
    templateUrl: 'people-list/template.html',
    controller: ['People',
      function PeopleListController(People) {
        var self = angular.extend(this, {
          children: [],
          adults: [],
          orderPropAdults: 'firstName',
          orderPropChildren: 'age',
          user: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            sex: '',
            loremIpsum: ''
          },
          personInfo: null,
          addPerson: addPerson,
          clearForm: clearForm,
          $onInit: $onInit,
          registerPerson: registerPerson,
          readyToAdd: false
        });

        function $onInit() {
           ['adults', 'children'].forEach(function(key) {
             People.query({peopleId: key})
              .$promise
              .then(function(result) {
                self[key] = result;
              });
           });
        }

        function registerPerson() {
          self.readyToAdd = !self.readyToAdd;
        }

        function addPerson(newUser) {
          if (!isValid(newUser)) {
             return;
          }

          self.user = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            age: newUser.age,
            email: newUser.email,
            sex: newUser.sex,
            loremIpsum: 'My id is: ' + Date.now()};

          if (self.user.age < 18) {
            self.children.push(self.user);
          } else {
            self.adults.push(self.user);
          }

          //self.form.reset();
          self.readyToAdd = !self.readyToAdd;

          self.user = {};
          // self.readyToAdd = true;

          function isValid(user) {
            if (!user.firstName || !user.lastName || !user.age || !user.email || !user.sex) {
              return false;
            }

            return true;
          }
        }

        // TODO: Findout how to clear form
        function clearForm(form){
          console.log(form);
          document.querySelector('#validationForm').reset();
        }
      }
    ]
  });
