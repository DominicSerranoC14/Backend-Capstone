'use strict';

const express = require('express');
const { Server } = require('http');
const socketio = require('socket.io');
const { json } = require('body-parser');
const app = express();
const server = Server(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/spyonfido';
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const routes = require('./routes/')
/////////////////////////////////////////


//Middlewares
app.set('port', PORT);
app.use(json());
app.use(session({
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    url: process.env.HEROKU_REDIS_PUCE_URL || 'redis://localhost:6379'
  }),
  secret: 'spyonfido'
}));


//Routes
app.use(routes);


//Connect to the database
mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
});


io.on('connect', socket => {
  console.log("Test connected");
});
