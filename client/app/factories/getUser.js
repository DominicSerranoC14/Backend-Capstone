"use strict";

app.factory("GetUserFactory", function ($http, $q, $location, APIURL) {

  // Get current user session email
  const getCurrentUserEmail = function() {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/api/user/current`)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  // Get current user session email
  const getCurrentUserObj = function(sessionId) {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/api/user/${sessionId}`)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  /////////////////////////////////////////
  return {
    getCurrentUserEmail,
    getCurrentUserObj
  };

});
