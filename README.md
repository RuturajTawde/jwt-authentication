# [JWT | Node.js](https://todolist-ruturaj.herokuapp.com/)

This is a JWT (Json web token) practice project.

## Available Scripts:

In the project directory, you can run:

### `npm install`

It runs all the required npm modules. The node_modules folder is not included here.

### `npm start`

It runs the app in the development mode. It will restart itself after identifying any changes in the program.
Hence the page will reload if you make edits.
You will also see any lint errors in the console.

### `.env`

Please create a .env file and pass your MongoDB URL and Secret token in variable MONGO_URI and SECRET_TOKEN respectively. The .env file is not included.

### `list of npm used: `

    "bcryptjs": This is to create a hashed password.
    "dotenv": This inserts environmental variables and hides them from the source code.
    "express": This is to provide HTTP functionality.
    "jsonwebtoken": This is to handle JWT.
    "mongoose": This is for Mongo DB operations.
    "nodemon": This monitors code and restarts the server.

## Working:
You can do the following things:

1. Register new your on link: 'http://localhost:3000/api/user/register'.
2. You can log in your user on link: 'http://localhost:3000/api/user/login'.
3. You can verify JWT functionality on link: 'http://localhost:3000/api/test'.

I did complete unit testing using [Postman](https://www.postman.com/).

You can create a new user and log in with same credentials. Then try a get request on test page. Only logged in user can access the test page.
Upcoming version will have some restrictions for any given user id.