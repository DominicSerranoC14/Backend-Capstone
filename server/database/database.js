'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/spyonfido';
/////////////////////////////////////////

module.exports.connect = () => mongoose.connect(MONGODB_URL);
module.exports.disconnect = () => mongoose.disconnect();
