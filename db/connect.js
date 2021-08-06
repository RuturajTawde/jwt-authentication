const mongoose = require('mongoose');

// connect db
const connectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB;