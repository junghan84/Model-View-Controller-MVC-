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
    console.log(req.body);
    console.log(req.session.id);
 
   Post.create({
     title: req.body.title,
     content: req.body.content,
     user_id: req.session.id
   })
           .then(dbpostData => {
             res.status(200).json(err)            
           })
           .catch(err => {
               console.log(err);
               res.status(400).json(err);
           })
});

module.exports = router;