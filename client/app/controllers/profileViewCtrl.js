'use strict';

app.controller('profileViewCtrl', function ($scope, $http, GetUserFactory, ScrollFactory) {

  const rightArrow = $('#right-arrow');
  const leftArrow = $('#left-arrow');
  let currentUserEmail;
  let scroll;

  // Return the current users session email / id
  GetUserFactory.getCurrentUser()
  .then((data) => {
    currentUserEmail = data.email;
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
