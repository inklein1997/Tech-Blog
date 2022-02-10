const { Comment } = require('../models');

const commentData = [
    {
        content: 'Woah I learned about this in class just this week!',
        user_id: 2
    },
    {
        content: 'UGH I HATE CALLBACK HELL',
        user_id: 2
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment