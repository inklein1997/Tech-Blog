const { User } = require('../models');

const userData = [
    {
        user: 'inklein1997',
        password: '12345678',
    },
    {
        user: 'deklein1997',
        password: '12345678',
    }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser