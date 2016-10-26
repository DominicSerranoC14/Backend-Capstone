'use strict';

const AWS = require('aws-sdk');
// const AWS_CREDS = require('./aws_creds.json');
const Image = require('./models/Image.js');
/////////////////////////////////////////


// Update AWS config with user credentials
AWS.config.update({
  secretAccessKey: process.env.AWSCREDS_BETA;
  //  || AWS_CREDS.credentials.beta,
  accessKeyId: process.env.AWSCREDS_ALPHA;
  // || AWS_CREDS.credentials.alpha,
  region: 'eu-central-1'
});


// Create a new instance of existing bucket
let s3Bucket = new AWS.S3({ params: {
  Bucket: 'spyonfido'
}});


/////////////////////////////////////////
module.exports.uploadPhoto = (req, res) => {

  // Get user info here
  let randomImageName = `image${Math.floor(Math.random() * (10000 - 0 + 1) + 0)}.jpg`;
  let imageUrl = null;

  console.log(new Date() + "Image received");

  // Upload image to AWS S3
  s3Bucket.upload({ Body: req,
    Key: randomImageName,
    ACL: 'public-read' })
  .send((err, data) => {
    // Save new image doc in db with imageUrl
    Image
    .create({
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      imgUrl: data.Location
    })
    .then((newImage) => {
      if (newImage) {
        console.log(new Date() + `Image has been saved in database at ${newImage.imgUrl}`);
        res.send({ msg: 'Message was created' });
      } else {
        res.send({ msg: 'Image was not created.' });
      }
    })
    .catch((err) => {
      res.send({msg: 'ERROR: Image could not be created'});
    });
  });

};
