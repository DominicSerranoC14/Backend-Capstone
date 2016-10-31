"use strict";

app.factory("GetVideoFactory", function ($http, $q, $location, APIURL) {


  const getUserVideoCollection = (userCreds) => {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/api/video/collection/${userCreds}`)
      .success(function(videoCollection) {
        resolve(videoCollection);
      }).error( function(error){
        reject(error);
      });
    });
  };


  /////////////////////////////////////////
  return {
    getUserVideoCollection
  };

});
