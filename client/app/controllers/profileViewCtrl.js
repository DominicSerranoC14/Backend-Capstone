'use strict';

app.controller('profileViewCtrl', function ($scope, $http, GetUserFactory, EditUserFactory, ScrollFactory) {

  const rightArrow = $('#right-arrow');
  const leftArrow = $('#left-arrow');
  let currentUserEmail;
  let scroll;
  $scope.userNameStatus = true;
  $scope.friendsStatus = true;
  $scope.currentUser = {};


  const determineFriends = () => {
    if ($scope.currentUser.profileFriends.length === 0) {
      $scope.friendsStatus = true;
    } else {
      $scope.friendsStatus = false;
    };
  };


  // Return the current users session email / id
  const loadPage = () => {
    GetUserFactory.getCurrentUserEmail()
    .then((sessionId) => {
      currentUserEmail = sessionId.email;

      GetUserFactory.getCurrentUserObj(sessionId.email)
      .then((userObject) => {
        $scope.currentUser = userObject;
        $scope.currentUser.profileEmail = userObject.email;
        $scope.currentUser.profileFriends = userObject.likedUsers;

        if (userObject.userName) {
          $scope.currentUser.profileUsername = userObject.userName;
          $scope.userNameStatus = false;
        } else {
          $scope.userNameStatus = true;
        }
      })
    });
  };
  loadPage();


  // Set event listener for username input
  $('#username-input').keypress((event) => {
    if (event.which == 13) {
      if ($scope.currentUser.userName === '') {
        return;
      }
      // Edit username
      EditUserFactory.editUser(currentUserEmail, $scope.currentUser);
      loadPage();
    };
  });


  // Functionality for the image display hover scroll
  rightArrow.hover(() => {
    ScrollFactory.scrollLeft();
  }, () => {
    ScrollFactory.stopScroll();
  });

  leftArrow.hover(() => {
    ScrollFactory.scrollRight();
  }, () => {
    ScrollFactory.stopScroll();
  });

});
