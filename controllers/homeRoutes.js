const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage',{loggedIn:req.session.loggedIn});
});

router.get('/login', async (req, res) =>{
  if(req.session.loggedIn){
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
