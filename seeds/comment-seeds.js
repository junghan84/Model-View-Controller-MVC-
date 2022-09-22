const { Comment } = require('../models');

const commentData = [{
   comment_text: "Why MVC is so important",
   user_id: 1,
   post_id: 1
},
{   
   comment_text: "Authentication vs. Authorization",
   user_id: 2,
   post_id: 2

},
{   
   comment_text: "Object-Relational Mapping",
   user_id: 3,
   post_id: 3

},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;