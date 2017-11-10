'use strict';

angular.module('peopleList')
  .component('registrationForm', {
    templateUrl: 'people-list/widgets/registration/template.html',
    bindings: {
    	children: '=',
    	adults: '=',
    	onClose: '&'
    },
    controller: FormController
  });

  function FormController() {
      var self = angular.extend(this, {
          // personInfo: null,
          addPerson: addPerson,
          clearForm: clearForm,
          user: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            sex: '',
            loremIpsum: ''
          },
          $onInit: $onInit,
          $onDestroy: $onDestroy
        });

        function $onInit() {
          console.log('onInit()');
        }

        function $onDestroy() {
          console.log('onDestroy()');
        }

        function addPerson(newUser) {
          console.log(self);

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

          self.user = {};
          self.onClose();

          function isValid(user) {
            if (!user.firstName || !user.lastName || !user.age || !user.email || !user.sex) {
              return false;
            }

            return true;
          }
        }

        // TODO: Findout how to clear form
        function clearForm(form){
          for(var i in self.user) {
            self.user[i] = '';

            if (form[i]) {
              form[i].$viewValue = '';
              form[i].$render();
            }
          }

          form.$setUntouched();

          form.$submitted = false;
        }
      }
