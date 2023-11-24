var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
 * Highlighted code block
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )

var Elephant = require("./models/elephants");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect('mongodb+srv://NikiMongo:Mongo6007@cluster0.r4kou0o.mongodb.net/?retryWrites=true&w=majority');

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var elephantsRouter = require('./routes/elephants');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
// var resourceRegister = require('./routes/register');
// var resourceLogin = require('./routes/login');
// var resourceLogout = require('./routes/logout');
// var resourcePing = require('./routes/ping');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*
 * Highlighted code block
 */
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/elephants', elephantsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
// app.use('/register', resourceRegister);
// app.use('/login', resourceLogin);
// app.use('/logout', resourceLogout);
// app.use('/ping', resourcePing);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await Elephant.deleteMany();
let instance1 = new
Elephant({ elephant_Habitat: 'Forest Habitat', elephant_Weight: 10000, elephant_Lifespan: '60 years', elephant_TuskLength: 8 }
);
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

let instance2 = new
Elephant({ elephant_Habitat: 'Savanna', elephant_Weight: 4500, elephant_Lifespan: '60 years', elephant_TuskLength: 5 });
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
Elephant({ elephant_Habitat: 'Desert', elephant_Weight: 5000, elephant_Lifespan: '70 years', elephant_TuskLength: 6 })
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});

let instance4 = new
Elephant({ elephant_Habitat: 'Wetland', elephant_Weight: 3000, elephant_Lifespan: '73 years', elephant_TuskLength: 3 })
instance4.save().then(doc=>{
console.log("Fourth object saved")}
).catch(err=>{
console.error(err)
});

}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
