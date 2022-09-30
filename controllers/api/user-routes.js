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

   User.create(req.body)
           .then(dbuserData => {
             req.session.save(() =>{
               req.session.id = dbuserData.id; //useing line31
               req.session.username = dbuserData.username;
               req.session.logged_in = true;

               res.status(200).json(dbuserData);
             })
           })
           .catch(err => {
               console.log(err);
               res.status(400).json(err);
           })

});

module.exports = router;