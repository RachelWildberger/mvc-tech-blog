const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedComment();
  
    await seedPost();

    await seedUser();
  
    process.exit(0);
  };
  
  seedAll();