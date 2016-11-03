'use strict';

app.controller('splashCtrl', function ($scope, $http, $location, AuthFactory) {

  $scope.userObj = {};
  $scope.registerObj = {};
  $scope.loginError = true;
  $scope.registerError = true;

  // If incorrect creds are entered show error message for login and register
  const showLoginErrorMsg = () => {
    $scope.loginError = false;
    $scope.loginObj = {};
  };

  const showRegisterErrorMsg = () => {
    $scope.registerError = false;
    $scope.registerObj = {};
  };


  // Send login creds to server
  $scope.sendLoginCredentials = () => {
    AuthFactory.postLoginCredentials($scope.loginObj)
    .then((userObj) => {
      if (userObj._id) {
        $location.path("/profile");
      } else {
        $scope.errMsg = userObj.msg;
        showLoginErrorMsg();
      };
    })
    .catch(() => {
      showLoginErrorMsg();
    });
  };

  $scope.sendRegisterCredentials = () => {

    if ( $scope.registerObj.password === $scope.registerObj.confirm ) {

      AuthFactory.postRegisterCredentials($scope.registerObj)
      .then((userObj) => {
        if (userObj._id) {
          $location.path("/profile");
        } else {
          $scope.errMsg = userObj.msg;
          showRegisterErrorMsg();
        }
      })
      .catch(() => {
        $scope.errMsg = 'User could not be created.';
        showRegisterErrorMsg();
      });

    } else {
      $scope.errMsg = 'User could not be created.';
      showRegisterErrorMsg();
    };

  };

});
