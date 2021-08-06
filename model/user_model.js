const mongoose = require('mongoose');

// our user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide the Name!!'],
        trim: true,
        minlength: [6, 'Name can not be less than 6 characters!!'],
        maxlength: [20, 'Name can not be greater than 20 characters!!'],
    },
    email: {
        type: String,
        required: [true, 'Must provide the email!!'],
        trim: true,
        minlength: [6, 'Email can not be less than 6 characters!!'],
        maxlength: [200, 'Email can not be greater than 20 characters!!'],
    },
    password: {
        type: String,
        required: [true, 'Must provide the password!!'],
        trim: true,
        minlength: [6, 'password can not be less than 6 characters!!'],
        maxlength: [1024, 'password can not be greater than 1024 characters!!'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('User', UserSchema)