var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose")


mongoose.set('strictQuery', true)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const mongoDB = "mongodb://localhost:27017/kalastusapp"
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
