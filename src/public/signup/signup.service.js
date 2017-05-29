(function () {
  "use strict";

  angular.module('public')
    .service('SignupService', SignupService);

  SignupService.$inject = ['$q', '$state'];
  function SignupService($q, $state) {
    var self = this;

    var userData = null;

    self.updateData = function (first_name, last_name, email, phone_number, menu_number) {
      userData = {};
      userData.first_name = first_name;
      userData.last_name = last_name;
      userData.email = email;
      userData.phone_number = phone_number;
      userData.menu_number = menu_number;
    };

    self.getUserData = function () {
      // var deferred = $q.defer();

      // setTimeout(function () {
      //   deferred.resolve(userData);
      // }, 1000);

      // return deferred.promise;
      return userData;
    }

  }

})();