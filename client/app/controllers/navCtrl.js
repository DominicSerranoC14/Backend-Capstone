'use strict';

app.controller('NavCtrl', function ($scope, $http, GetUserFactory) {

  $scope.navBarStatus = false;

  GetUserFactory.getCurrentUserEmail()
  .then((userId) => {
    if (userId.msg) {
      $scope.navBarStatus = false;
    } else {
      $scope.navBarStatus = true;
    }
  });

});
