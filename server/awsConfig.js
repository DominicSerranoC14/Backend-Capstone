'use strict';

const AWS = require('aws-sdk');
const AWS_CREDS = require('./aws_creds.json');
const Image = require('./models/Image.js');
/////////////////////////////////////////


// Update AWS config with user credentials
AWS.config.update({
  secretAccessKey: AWS_CREDS.credentials.beta,
  accessKeyId: AWS_CREDS.credentials.alpha,
  region: 'eu-central-1'
});


// Create a new instance of existing bucket
let s3Bucket = new AWS.S3({ params: {
  Bucket: 'spyonfido'
}});


/////////////////////////////////////////
module.exports.uploadPhoto = (req, res) => {

  let randomImageName = `image${Math.floor(Math.random() * (10000 - 0 + 1) + 0)}.jpg`;
  let imageUrl = null;
  // Get user info here

  s3Bucket.upload({ Body: req,
    Key: randomImageName,
    ACL: 'public-read' })
  .send((err, data) => {
    console.log(err || data);
    Image
    .create({
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      imgUrl: data.Location
    })
    .then((newImageObject) => {
      if (newImageObject) {
        res.send({ msg: 'Message was created' });
      } else {
        res.send({ msg: 'Image was not created.' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({msg: 'ERROR: Image could not be created'});
    });
  });

};
