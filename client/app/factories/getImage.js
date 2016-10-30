"use strict";

app.factory("GetImageFactory", function ($http, $q, $location, APIURL) {

  // Get all images for the current user
  const getUserImageCollection = (userCreds) => {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/api/image/collection/${userCreds}`,
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
    getUserImageCollection
  };

});
