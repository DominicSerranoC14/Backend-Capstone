"use strict";

app.factory("ScrollFactory", function ($http, $q, $location, APIURL) {

  const imageDisplay = $('#profile-image-display');

  const scrollLeft = () => {
    scroll = setInterval(() => {
      imageDisplay.animate({
        scrollLeft: `+=${30}px`
      });
    }, 400)
  };

  const scrollRight = () => {
    scroll = setInterval(() => {
      imageDisplay.animate({
        scrollLeft: `-=${30}px`
      });
    }, 400)
  };

  const stopScroll = () => {
    clearInterval(scroll);
  };


  /////////////////////////////////////////
  return {
    scrollLeft,
    scrollRight,
    stopScroll
  };

});
