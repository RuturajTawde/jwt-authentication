const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()

const authRouter = require('./router/auth');
const testPage = require('./router/testpage')

// body parser middleware
app.use(express.json());

//route middleware
app.use('/api/user/', authRouter)
app.use('/api/test/', testPage)

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        //connect db and then start up the server
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()