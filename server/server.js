'use strict';

const express = require('express');
const { Server } = require('http');
const socketio = require('socket.io');
const { json } = require('body-parser');
const app = express();
const server = Server(app);
const PORT = process.env.PORT || 3000;
const DB = require('./database/database.js');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const routes = require('./routes/');
const { red, cyan } = require('chalk');
/////////////////////////////////////////


//Middlewares
app.set('port', PORT);
app.use(express.static('client'));
app.use(express.static('server/videoFiles'));
app.use(json());
app.use(session({
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    url: process.env.HEROKU_REDIS_PUCE_URL || 'redis://localhost:6379'
  }),
  secret: 'spyonfido'
}));
app.use((req, res, next) => {
  app.locals.email = req.session.email;
  next();
});


//Routes
app.use(routes);


//Middleware catch for virtual urls when using 'html5Mode' in Angular
app.use('/api', (req, res) => {
  res.status(404).send({msg: '404: Not found'});
});

app.use((req, res) => {
  res.sendFile(process.cwd() + '/client/index.html');
});


// Error handling middleware
app.use((
    err,
    { method, url, headers: { 'user-agent': agent } },
    res,
    next
  ) => {

  const timeStamp = Date().slice(16, -15);
  const statusCode = res.statusCode;
  const statusMessage = res.statusMessage;

  console.error(
    `${red(timeStamp)} [${red(`${url}`)}] Error(${statusCode}): "${statusMessage}"`
  )
  console.error(err.stack)
})


//Connect to the database
DB.connect()
.then(() => {
  server.listen(PORT, () => console.log(cyan(Date().slice(16, -15)), `Listening on port: ${PORT}`));
});
