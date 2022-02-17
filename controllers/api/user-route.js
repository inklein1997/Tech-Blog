const router = require('express').Router();
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
        if (req.body.username && req.body.password) {
            const userData = await User.create({
                user: req.body.username,
                password: req.body.password
            })
            res.status(200).json(userData)
        } else {
            res.status(400).json({message: 'You must enter both a username AND password'})
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
        })
        if (!userData) {
            res.status(404).json({message: 'Incorrect email or password!  Please try again!'})
        } else {
            if(req.body.password == userData.password) {
            //     req.session.save(() => {
            //         req.session.user = userData.user
            //         req.session.logged_in = true
            //     })
                res.status(200).json({ user: userData, message: "You are now logged in!" })
            }
        }


    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router