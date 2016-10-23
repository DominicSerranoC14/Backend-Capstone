'use strict';

const User = require('../models/User.js');
const Image = require('../models/Image.js');
const DB = require('./database.js');

/////////////////////////////////////////

//Drop the collections first
DB.connect()
.then(() => User.remove({}))
.then(() => Image.remove({}))
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
      encodedImg: 'ASDFG'
    },
    {
      ownerId: '12345',
      ownerName: 'greg2g',
      timeStamp: new Date(),
      encodedImg: 'hjkl;'
    },
    {
      ownerId: '67890',
      ownerName: 'philly',
      timeStamp: new Date(),
      encodedImg: 'zxcvnm'
    },
    {
      ownerId: '67890',
      ownerName: 'philly',
      timeStamp: new Date(),
      encodedImg: 'qwerty'
    }
  ])
)
//disconnect the server after seeding
.then(DB.disconnect)
.catch(console.error);
