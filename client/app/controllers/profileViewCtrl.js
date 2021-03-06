'use strict';

app.controller('profileViewCtrl', function ($scope, $http, GetUserFactory, EditUserFactory, GetImageFactory, GetVideoFactory, MainDisplayFactory, RPIFactory, ScrollFactory) {

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


  // Add a box shadow to the hovered over media
  $scope.mediaHover = (e) => {
    $(e.target).hover(() => {
      $(e.target).addClass('hover-media');
    }, () => {
      $(e.target).removeClass('hover-media');
    });
  };


  // When a image or video is selected, set that media url to the main media display position
  $scope.setToMainMedia = (mediaObj) => {
    if (mediaObj.imgUrl) {
      $scope.mainDisplayImage = mediaObj.imgUrl;
    } else if (mediaObj.videoUrl) {
      $scope.mainDisplayVideo = mediaObj.videoUrl;
    }
  };


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
        if (imageCollection.msg || imageCollection.length === 0) {
          $scope.currentUser.imageCollection = null;
          $scope.imageDisplayStatus = false;
        } else {
          ScrollFactory.sortArrayByTimeStamp(imageCollection);
          $scope.imageDisplayStatus = true;
          $scope.currentUser.imageCollection =
          imageCollection;
          $scope.mainDisplayImage = $scope.currentUser.imageCollection[0].imgUrl;
        };
      });

      // Load the Users video collection
      GetVideoFactory.getUserVideoCollection(currentUserEmail)
      .then((videoCollection) => {
        if (videoCollection.msg || videoCollection.length === 0) {
          $scope.videoDisplayStatus = false;
          $scope.currentUser.videoCollection = null;
        } else {
          ScrollFactory.sortArrayByTimeStamp(videoCollection);
          $scope.videoDisplayStatus = true;
          $scope.currentUser.videoCollection = videoCollection;
          $scope.mainDisplayVideo = $scope.currentUser.videoCollection[0].videoUrl;
        };
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
            if (collection.msg) {
              return
            } else if (collection.length === 1 && $scope.currentUser.imageCollection === null) {
              $scope.currentUser.imageCollection = collection;
              $scope.imageDisplayStatus = true;
              MainDisplayFactory.setMainDisplayMedia($scope);
              clearInterval(refreshTimerId);
            } else if (collection.length > $scope.currentUser.imageCollection.length) {
              ScrollFactory.sortArrayByTimeStamp(collection);
              $scope.currentUser.imageCollection = collection;
              clearInterval(refreshTimerId);
            };
          });
        }, 1000);
        $scope.showImagesInDisplay();
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
            if (collection.msg) {
              return
            } else if (collection.length === 1 && $scope.currentUser.videoCollection === null) {
              $scope.currentUser.videoCollection = collection;
              $scope.videoDisplayStatus = true;
              clearInterval(refreshTimerId);
            } else if (collection.length > $scope.currentUser.videoCollection.length) {
              ScrollFactory.sortArrayByTimeStamp(collection);
              $scope.currentUser.videoCollection = collection;
              clearInterval(refreshTimerId);
            };
          });
        }, 1000);
        $scope.showVideosInDisplay();
      } else {
        console.log("Failed");
      }
    });
  };


  // Toggle what media is shown in the display container
  $scope.showImagesInDisplay = () => {
    $scope.viewImagesInDisplayStatus = true;
    $scope.viewVideosInDisplayStatus = false;
    if ($scope.currentUser.imageCollection) {
      MainDisplayFactory.setMainDisplayMedia($scope);
    };
  };

  $scope.showVideosInDisplay = () => {
    $scope.viewImagesInDisplayStatus = false;
    $scope.viewVideosInDisplayStatus = true;
    if ($scope.currentUser.videoCollection) {
      MainDisplayFactory.setMainDisplayMedia($scope);
    };
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
