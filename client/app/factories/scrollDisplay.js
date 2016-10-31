"use strict";

app.factory("ScrollFactory", function ($http, $q, $location, APIURL) {

  const imageDisplay = $('.profile-image-display');

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


  const sortArrayByTimeStamp = (arrayList) => {
    arrayList.sort((a, b) => {
      // Sort the images by time
      if (b.timeStamp.slice(15) < a.timeStamp.slice(15)) {
        return -1;
      };
      if (b.timeStamp.slice(15) > a.timeStamp.slice(15)) {
        return 1;
      };
      // names must be equal
      return 0;
    });
  };


  /////////////////////////////////////////
  return {
    scrollLeft,
    scrollRight,
    stopScroll,
    sortArrayByTimeStamp
  };

});
