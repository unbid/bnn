var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const userDao = require('./models/user-dao.js');
const passport = require('passport'); // auth middleware
const moment = require('moment');
const LocalStrategy = require('passport-local').Strategy; // username and password for login
const session = require('express-session');

// set up the "username and password" login strategy
// by setting a function to verify username and password
passport.use(new LocalStrategy(
  function(username, password, done) {
    userDao.getUser(username, password).then(({user, check}) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!check) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
  }
));

// serialize and de-serialize the user (user object <-> session)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  userDao.getUserById(id).then(user => {
    done(null, user);
  });
});

var homeRouter = require('./routes/home');
var unipolRentalRouter = require('./routes/unipolrental');
var unipolRentalCollaboratoriRouter = require('./routes/unipolrentalcollaboratori');
var notizieRouter = require('./routes/notizie');
var notizieCollaboratoriRouter = require('./routes/notiziecollaboratori');
var loginRouter = require('./routes/login');
var PAIRouter = require('./routes/PAI');

var notizia1Router = require('./routes/notizia1');
var notizia2Router = require('./routes/notizia2');
var notizia3Router = require('./routes/notizia3');
var notizia4Router = require('./routes/notizia4');
var notizia5Router = require('./routes/notizia5');
var notizia6Router = require('./routes/notizia6');
var notizia7Router = require('./routes/notizia7');
var notizia8Router = require('./routes/notizia8');
var notizia9Router = require('./routes/notizia9');
var notizia10Router = require('./routes/notizia10');
var notizia11Router = require('./routes/notizia11');
var notizia12Router = require('./routes/notizia12');
var notizia13Router = require('./routes/notizia13');
var notizia14Router = require('./routes/notizia14');
var notizia15Router = require('./routes/notizia15');
var notizia16Router = require('./routes/notizia16');
var notizia17Router = require('./routes/notizia17');
var notizia18Router = require('./routes/notizia18');
var notizia19Router = require('./routes/notizia19');
var notizia20Router = require('./routes/notizia20');
var notizia21Router = require('./routes/notizia21');
var notizia22Router = require('./routes/notizia22');
var notizia23Router = require('./routes/notizia23');

let app = express();

// set up the session
app.use(session({
  secret: 'a secret sentence not to share with anybody and anywhere, used to sign the session ID cookie',
  resave: false,
  saveUninitialized: false 
}));

// init passport
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
  app.locals.moment = moment;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/unipolrental', unipolRentalRouter);
app.use('/unipolrentalCollaboratori', unipolRentalCollaboratoriRouter);
app.use('/notizie', notizieRouter);
app.use('/notizieCollaboratori', notizieCollaboratoriRouter);
app.use('/loginCollaboratori', loginRouter);
app.use('/PAI', PAIRouter);

app.use('/notizia1', notizia1Router);
app.use('/notizia2', notizia2Router);
app.use('/notizia3', notizia3Router);
app.use('/notizia4', notizia4Router);
app.use('/notizia5', notizia5Router);
app.use('/notizia6', notizia6Router);
app.use('/notizia7', notizia7Router);
app.use('/notizia8', notizia8Router);
app.use('/notizia9', notizia9Router);
app.use('/notizia10', notizia10Router);
app.use('/notizia11', notizia11Router);
app.use('/notizia12', notizia12Router);
app.use('/notizia13', notizia13Router);
app.use('/notizia14', notizia14Router);
app.use('/notizia15', notizia15Router);
app.use('/notizia16', notizia16Router);
app.use('/notizia17', notizia17Router);
app.use('/notizia18', notizia18Router);
app.use('/notizia19', notizia19Router);
app.use('/notizia20', notizia20Router);
app.use('/notizia21', notizia21Router);
app.use('/notizia22', notizia22Router);
app.use('/notizia23', notizia23Router);

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

module.exports = app;
