'use strict';

angular.module('peopleList')
  .component('userPic', {
    templateUrl: 'people-list/widgets/user-pic/user-pic.html',
    bindings: {
        personInfo: '<'
    },
    controller: UserPicController
  })
  .component('userPicLarge', {
      templateUrl: 'people-list/widgets/user-pic/user-pic.html',
      bindings: {
          personInfo: '<'
      },
      controller: UserPicLargeController
    })

UserPicController.$inject = [];

function UserPicController() {
    var self = angular.extend(this, {
      $onChanges: $onChanges,
      url: ''
    });

    var pictures = {
      male: 'data/male.png',
      female: 'data/female.png',
      DEFAULT: 'data/default.png'
    };

    function $onChanges() {
      self.url = pictures[(self.personInfo || {}).sex] || pictures["DEFAULT"]
    }
  }

UserPicLargeController.$inject = [];

function UserPicLargeController() {
  var self = new UserPicController();
  self.large = true;

  return self;
}
