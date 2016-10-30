'use strict';

app.controller('profileViewCtrl', function ($scope, $http) {

  const rightArrow = $('#right-arrow');
  const leftArrow = $('#left-arrow');
  const imageDisplay = $('#profile-image-display');
  let scroll;

  const scrollLeft = () => {
    scroll = setInterval(() => {
      imageDisplay.animate({
        scrollLeft: `+=${15}px`
      });
    }, 400)
  };

  const scrollRight = () => {
    scroll = setInterval(() => {
      imageDisplay.animate({
        scrollLeft: `-=${15}px`
      });
    }, 400)
  };

  const stopScroll = () => {
    clearInterval(scroll);
  };

  rightArrow.hover(() => {
    scrollLeft();
  }, () => {
    stopScroll();
  });

  leftArrow.hover(() => {
    scrollRight();
  }, () => {
    stopScroll();
  });

});
