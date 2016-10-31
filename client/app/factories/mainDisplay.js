"use strict";

app.factory("MainDisplayFactory", function () {

  // Function determines what media should be displayed in main display container
  const setMainDisplayMedia = (s) => {
    if (s.viewImagesInDisplayStatus === true) {
      s.mainDisplayImage = s.currentUser.imageCollection[0].imgUrl;
    } else if (s.viewVideosInDisplayStatus === true) {
      s.mainDisplayVideo = s.currentUser.videoCollection[0].videoUrl;
    };
  };


  /////////////////////////////////////////
  return {
    setMainDisplayMedia
  };

});
