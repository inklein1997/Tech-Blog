const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        description: 'MVC allows developers to maintain a true separataion of concerns, devising the Model layer for database, the View layer for design, and the Controller layer for application logic.',
        user_id: 1,
        comment_id: 1,
    },
    {
        title: 'The worst part about Javascript...',
        description: 'Callback Hell...',
        user_id: 1,
        comment_id: 2,
    },
]

const seedPost = () => Post.bulkCreate(postData)

module.exports(seedPost)