'use strict';

app.controller('NavCtrl', function ($scope, $http, GetUserFactory) {

  $scope.navBarStatus = false;

  GetUserFactory.getCurrentUserEmail()
  .then((userId) => {
    if (userId) {
      $scope.navBarStatus = true;
    } else {
      $scope.navBarStatus = false;
    }
  });

});
