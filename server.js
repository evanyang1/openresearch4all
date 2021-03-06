const express = require('express')
const { join } = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('./models');
const app = express()
require('dotenv').config()

app.use(express.static(join(__dirname, 'client', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err))
));

app.use(require('./routes'))

require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
});

app.get('/*', ( req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
})
app.listen(process.env.PORT || 4000)