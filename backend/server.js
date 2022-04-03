//Imports
//express is middleware that helps talk to the server
const express = require('express');
//cors is a way to provide information across websites
const cors = require('cors');
//mongoose is a library that helps talk to the mongodb database
const mongoose = require('mongoose')

//dotenv is an environment folder that keeps secured connection authentications and tokens
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
app.use(express.json());

//Connection to Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
});

// const exerciseRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/excercises', exerciseRouter);
// app.use('/users', usersRouter);

//Server listening
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});