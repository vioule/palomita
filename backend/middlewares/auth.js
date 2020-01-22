const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const bcrypt         = require('bcrypt');
const flash          = require('connect-flash');
const session        = require('express-session');
const csrf           = require("csurf");
const mongoose       = require('mongoose');

module.exports = function(app, db) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
   
  passport.deserializeUser(function(id, done) {
    db.collection('users').findOne({_id: mongoose.Types.ObjectId(id)}, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      db.collection('users').findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  app.use(session({secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(csrf());
  app.use(flash());
}