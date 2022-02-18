const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = User.findAll();
        if (!userData) {
            res.status(404).json('No Users Found');
            return
        } else {
            res.status(200).json(userData);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

//CREATES A NEW USER
router.post('/', async (req, res) => {
    try {
        if (req.body.user && req.body.password) {
            const userData = await User.create({
                user: req.body.user,
                password: req.body.password
            })
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                req.session.username = req.body.user;
                res.status(200).json(userData);
            })
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGINS USER
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user: req.body.user
            }
        });
        // console.log(`user id is ${userData.id}`)
        if (!userData) {
            res.status(404).json({ message: 'Incorrect email or password!  Please try again!' })
            return
        };

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(404).json({ message: 'Incorrect email or password!  Please try again!' })
            return
        };
            console.log('testsestsetsetststet')
            req.session.save(() => {
                req.session.user_id = userData.id
                req.session.logged_in = true;
                req.session.username = req.body.user
                res.status(200).json({ user: userData, message: "You are now logged in!" })
            })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router