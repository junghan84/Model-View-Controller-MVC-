const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./comment-routes');

router.get('/', (req, res) => {
   User.findAll({})
       .then(dbuserData => res.json(dbuserData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       })
});

router.get('/:id', (req, res) => {
   User.findAll({
           where: {
               id: req.params.id
           }
       })
       .then(dbuserData => res.json(dbuserData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       })
});

router.post('/', (req, res) => {

console.log(req.body);
   User.create(req.body)
           .then(dbuserData => {
             req.session.save(() =>{
               req.session.userId = dbuserData.id; //useing line31
               req.session.username = dbuserData.username;
               req.session.loggedIn = true;

               res.status(200).json(dbuserData);
             })
           })
           .catch(err => {
               console.log(err);
               res.status(400).json(err);
           })

});

// Login
router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      console.log(dbUserData);
  
      if (!dbUserData) {
        res     
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
  
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = dbUserData.id
        // req.session.id = dbUserData.id
        console.log(
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });

      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/logout',(req,res) =>{
  if(req.session.loggedIn){
    req.session.destroy(()=>{
      res.status(204).end();
    });
}else{
  res.status(404).end();
}
});
  

module.exports = router;