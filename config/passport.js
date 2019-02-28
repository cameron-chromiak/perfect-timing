const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// load User models
const User = require('../models/User') //mongoose.model('users')

module.exports = function(passport){
  passport.use(new LocalStrategy(
    {usernameField: 'email'}, (
      email, password, done ) =>{
        //Look for user
        User.findOne({
          email: email
        }).then(user =>{
          if(!user){
            return done(null, false)
          }//match user user.password from then(user) -if its found
          bcrypt.compare(password, user.password, (err, isMatch)=>{
            if(err) throw error
            if(isMatch){
              return done(null, user)
            }else{
              return done(null, false,{message: 'No incorrect password'})
            }
          })
        })
      }))

    //session
      passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}
