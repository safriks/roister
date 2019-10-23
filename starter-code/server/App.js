// require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
var createError = require('http-errors')
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require('cors')

const app = express();
app.use(express.static('uploads'));

const app_name = require('./package.json.js').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

mongoose.connect('mongodb://localhost/roister', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to MongoDB! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {a
    console.error('Error connecting to mongo', err)
  });

// Middleware Setup
app.use(session({
  secret: "basic-auth-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 *1000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 *1000 // 1 day
  })
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use('/', require('./routes/auth'));

module.exports = app;

app.listen(3001, ()=>{console.log(`App is listening on port 3001`)});