const router = require('express').Router();
const sequlize = require('../config/connection');
const {Comment, User, Post} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) =>{
  res.render('dashbord',{
    loggedIn: req.session.loggedIn
  });
})

router.get('/new', (req, res) =>{
  res.render('new-post');
});

module.exports = router;