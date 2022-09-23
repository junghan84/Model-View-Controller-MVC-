const { Post } = require('../models');

const postData = [
  {
    "title": "MVC1",
    "content": "MVC1-1",
    "user_id": "1"
  },
  {
    "title": "MVC2",
    "content": "MVC2-1",
    "user_id": "2"
  },
  {
    "title": "MVC3",
    "content": "MVC3-1",
    "user_id": "3"
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
