const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    username: 'techieStacy',
    date: 'February 20, 2022',
  },
  {
    comment: '',
    username: '',
    date: '',
  },
  {
    comment: '',
    username: '',
    date: '',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;