const router = require('express').Router();
const verify = require('./verifyToken');

// user middleware to verify only logged in can se this page
router.get('/', verify, (req, res) => {
    // res.json({
    //     post: {
    //         title: 'test page for logged in user',
    //         desc: 'only logged in user can reach this page!'
    //     }
    // })
    res.send(req.user)
})

module.exports = router;