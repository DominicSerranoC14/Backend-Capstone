"use strict";

app.factory("EditUserFactory", function ($http, $q, $location, APIURL) {

  // Edit a specific user
  const editUser = function(sessionId, userObj) {
    return $q(function (resolve, reject) {
      $http.post(`${APIURL}/api/user/${sessionId}`, userObj)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  /////////////////////////////////////////
  return {
    editUser
  };

});
