const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import route
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () =>
  console.log('connected to db'),
);

//Middleware
app.use(express.json());

//Routes middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3002, () => console.log('server is running'));
