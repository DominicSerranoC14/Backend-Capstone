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


  // Send the user register creds to server
  const postRegisterCredentials = function(userCreds) {
    return $q(function (resolve, reject) {
      $http.post(`${APIURL}/api/user/register`,
      userCreds)
      .success(function(userId) {
        resolve(userId);
      }).error( function(error){
        reject(error);
      });
    });
  };

  /////////////////////////////////////////
  return {
    postLoginCredentials,
    postRegisterCredentials
  };

});
