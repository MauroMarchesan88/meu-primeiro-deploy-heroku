const cors = require('cors');
const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

const corsOptions = {
    origin: 'https://herocker-exercise-46-frontend.herokuapp.com',
    optionsSuccessStatus: 200,
    // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/users', cors(corsOptions), rescue(UserController));

app.use(errorMiddleware); 

module.exports = app;
