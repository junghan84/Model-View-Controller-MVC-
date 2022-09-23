const { User } = require('../models');

const userData = [
   {
     "username": "Jung",
     "password": "jung"

   },
   {
      "username": "Jason",
      "password": "jason"
   },
   {
      "username": "Jimmy",
      "password": "jimmy"
   }
 ];

 const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

 