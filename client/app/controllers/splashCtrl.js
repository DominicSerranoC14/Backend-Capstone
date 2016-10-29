'use strict';

app.controller('splashCtrl', function ($scope, $http, $location, AuthFactory) {

  $scope.userObj = {};
  $scope.loginError = true;

  // If incorrect user cred are entered show error message
  const showLoginErrorMsg = () => {
    $scope.loginError = false;
    $scope.userObj = {};
  };

  // Send login creds to server
  $scope.sendLoginCredentials = () => {
    AuthFactory.postLoginCredentials($scope.userObj).then((userObj) => {
      if (userObj._id) {
        $location.path("/profile");
      } else {
        showLoginErrorMsg();
      };
    });
  };

});
