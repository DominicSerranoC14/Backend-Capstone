'use strict';

app.controller('profileViewCtrl', function ($scope, $http, GetUserFactory, EditUserFactory, GetImageFactory, GetVideoFactory, RPIFactory, ScrollFactory) {

  const rightArrow = $('#right-arrow');
  const leftArrow = $('#left-arrow');
  let currentUserEmail;
  let scroll;
  $scope.userNameStatus = true;
  $scope.friendsStatus = true;
  $scope.viewImagesInDisplayStatus = true;
  $scope.viewVideosInDisplayStatus = false;
  $scope.imageDisplayStatus = true;
  $scope.videoDisplayStatus = true;
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

      // Load the users personal information
      GetUserFactory.getCurrentUserObj(currentUserEmail)
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
      });

      // Load the users image collection
      GetImageFactory.getUserImageCollection(currentUserEmail)
      .then((imageCollection) => {
        ScrollFactory.sortArrayByTimeStamp(imageCollection);
        if (imageCollection.msg) {
          $scope.imageDisplayStatus = false;
        } else {
          $scope.imageDisplayStatus = true;
          $scope.currentUser.imageCollection =
          imageCollection;
        };
      });

      // Load the Users video collection
      GetVideoFactory.getUserVideoCollection(currentUserEmail)
      .then((videoCollection) => {
        ScrollFactory.sortArrayByTimeStamp(videoCollection);
        if (videoCollection.msg) {
          // Show new video message
          $scope.videoDisplayStatus = false;
        } else {
          $scope.videoDisplayStatus = true;
          $scope.currentUser.videoCollection = videoCollection;
        }
      });

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


  // Commands for RPI
  $scope.takeSinglePicture = () => {
    RPIFactory.takeSinglePicture()
    .then((result) => {
      if (result.msg) {
        let refreshTimerId = setInterval(() => {
          GetImageFactory.getUserImageCollection(currentUserEmail)
          .then((collection) => {
            ScrollFactory.sortArrayByTimeStamp(collection);
            if (collection.length > $scope.currentUser.imageCollection.length) {
              $scope.currentUser.imageCollection = collection;
              clearInterval(refreshTimerId);
            };
          });
        }, 1000);
      } else {
        console.log("Failed");
      }
    });
  };

  $scope.takeStaticVideo = () => {
    RPIFactory.takeStaticVideo()
    .then((response) => {
      if (response.msg) {
        let refreshTimerId = setInterval(() => {
          GetVideoFactory.getUserVideoCollection(currentUserEmail)
          .then((collection) => {
            ScrollFactory.sortArrayByTimeStamp(collection);
            if (collection.length > $scope.currentUser.videoCollection.length) {
              $scope.currentUser.videoCollection = collection;
              clearInterval(refreshTimerId);
            };
          });
        }, 1000);
      } else {
        console.log("Failed");
      }
    });
  };


  // Toggle what media is shown in the display container
  $scope.showImagesInDisplay = () => {
    $scope.viewImagesInDisplayStatus = true;
    $scope.viewVideosInDisplayStatus = false;
  };

  $scope.showVideosInDisplay = () => {
    $scope.viewImagesInDisplayStatus = false;
    $scope.viewVideosInDisplayStatus = true;
  };


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


});// End Ctrl
