(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController (SignupService) {
  var self = this;

  self.userData = SignupService.getUserData();
}

})();