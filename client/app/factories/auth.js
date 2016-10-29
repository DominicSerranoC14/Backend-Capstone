"use strict";

app.factory("AuthFactory", function ($http, $q, $location, APIURL) {

  // Send the user login creds to server
  const postLoginCredentials = function(userCreds) {
    return $q(function (resolve, reject) {
      $http.post(`${APIURL}/api/user/login`,
      userCreds)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  /////////////////////////////////////////
  return { postLoginCredentials }

});
