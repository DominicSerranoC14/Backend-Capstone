"use strict";

app.factory("GetUserFactory", function ($http, $q, $location, APIURL) {

  // Get current user
  const getCurrentUser = function() {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/api/user/current`)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  /////////////////////////////////////////
  return {
    getCurrentUser
  };

});
