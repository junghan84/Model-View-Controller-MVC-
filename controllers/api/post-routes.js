const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
   Post.findAll({})
       .then(dbpostData => res.json(dbpostData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       })
});

router.get('/:id', (req, res) => {
   Post.findAll({
           where: {
               id: req.params.id
           }
       })
       .then(dbpostData => res.json(dbpostData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       })
});

router.post('/', (req, res) => {

   Post.create(req.body)
           .then(dbpostData => {
             req.session.save(() =>{
               req.session.id = dbpostData.id; //useing line31
               req.session.username = dbpostData.username;
               req.session.logged_in = true;

               res.status(200).json(dbpostData);
             })
           })
           .catch(err => {
               console.log(err);
               res.status(400).json(err);
           })

});

module.exports = router;