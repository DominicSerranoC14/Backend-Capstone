'use strict';

const DB = require('./database.js');
const User = require('../models/User.js');
const Image = require('../models/Image.js');
const Post = require('../models/Post.js');
/////////////////////////////////////////

//Drop the collections first
DB.connect()
.then(() => User.remove())
.then(() => Image.remove())
.then(() => Post.remove())
.then(() =>
  User.insertMany([
    {
      userName: 'greg2g',
      email: 'greg@greg.com',
      password: 'gregrulez'
    },
    {
      userName: 'philly',
      email: 'phil@phil.com',
      password: 'philmeup'
    },
  ])
)
.then(() =>
  Image.insertMany([
    {
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      _id: '12345' + '5b6n7m',
      encodedImg: 'ASDFG'
    },
    {
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      _id: '12345' + '1a2s3d',
      encodedImg: 'hjkl;'
    },
    {
      ownerId: '67890',
      ownerName: 'philly',
      timeStamp: new Date(),
      _id: '067890' + '1q2w3e',
      encodedImg: 'zxcvnm'
    },
    {
      ownerId: '67890',
      ownerName: 'philly',
      timeStamp: new Date(),
      _id: '067890' + '4r5t6y',
      encodedImg: 'qwerty'
    }
  ])
)
.then(() =>
  Post.insertMany([
    {
      ownerId: '67890',
      ownerName: 'philly',
      timeStamp: new Date(),
      header: 'Philly boi is here',
      contentBody: 'What it do my people, philishere',
      attachedImageList: [
        '067890' + '1q2w3e',
        '067890' + '4r5t6y'
      ]
    },
    {
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      header: 'Dis is greg',
      contentBody: 'Greg is awesome',
      attachedImageList: [
        '12345' + '5b6n7m',
        '12345' + '1a2s3d'
      ]
    }
  ])
)
//disconnect the server after seeding
.then(DB.disconnect)
.catch(console.error);
