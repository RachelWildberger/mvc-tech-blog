const { User } = require('../models');

const userData = [
  {
    username: 'JohnMartin',
    email: 'jmartin@email.com',
    password: 'Password1!',
  },
  {
    username: 'techieStacy',
    email: 'stacyintech@email.com',
    password: 'Password2@',
  },
  {
    username: 'Kat31',
    email: 'kat31@email.com',
    password: 'Password3#',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;