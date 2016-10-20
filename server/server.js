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
/////////////////////////////////////////


//Middlewares
app.use(json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//Connect to the database
mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
});


io.on('connect', socket => {
  console.log("Test connected");
});
