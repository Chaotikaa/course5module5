(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', '$http'];
function SignupController (SignupService, $http) {
  var signupCtrl = this;


  signupCtrl.onSubmit = function () {


    $http({
      method: 'GET',
      url: `https://chtka-module5.herokuapp.com/menu_items/${signupCtrl.menu_item_number}.json`
    }).then(function (response) {
      SignupService.updateData(signupCtrl.first_name, signupCtrl.last_name, signupCtrl.email, signupCtrl.phone, signupCtrl.menu_item_number);
      signupCtrl.done = true;
      console.log('updating');
      signupCtrl.valid_menu_number = true;
    }).catch(function (err) {
      signupCtrl.valid_menu_number = false;
      signupCtrl.done = false;
      console.log('failed request');
    });
    
  }
  
}

})();