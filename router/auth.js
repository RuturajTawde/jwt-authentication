const router = require('express').Router();
const User = require('../model/user_model');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// register screen
router.post('/register', async (req, res) => {
    // validation
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user email is already in db
    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) return res.status(400).send("Email already exists in the DB");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const users = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const saveUser = await users.save();
        res.send({ users: users._id });
    } catch (err) {
        res.status(400).send(err);
    }
})

// login screen
router.post('/login', async (req, res) => {
    // validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user email is already in db
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email does not exists in the DB");

    // check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid password");

    // create and assign a token
    // you can decode the token on JWT site
    const token = jwt.sign({_id : user._id}, process.env.SECRET_TOKEN);
    res.header('auth-token',token).send(token);
    
})

module.exports = router;