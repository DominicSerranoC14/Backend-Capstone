"use strict";

app.factory("RPIFactory", function ($http, $q, $location, APIURL) {

  // Send post to RPI to hit the take picture command
  const takeSinglePicture = function() {
    return $q(function (resolve, reject) {
      $http.get(`${APIURL}/rpi/image/single`)
      .success(function(response) {
        resolve(response);
      }).error( function(error){
        reject(error);
      });
    });
  };


  /////////////////////////////////////////
  return {
    takeSinglePicture
  };

});
