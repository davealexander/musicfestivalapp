//Imports
//express is middleware that helps talk to the server
import express from "express";
//cors is a way to provide information across websites
import cors from "cors";
//mongoose is a library that helps talk to the mongodb database
import mongoose from "mongoose";
import App from "../src/App.js"

//dotenv is an environment folder that keeps secured connection authentications and tokens
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
//server can accept json in the body of a request
app.use(express.json());

//Routes
app.use("/", App);
app.use("*", (req, res) => res.status(404).json({error: "404 page not found"}));



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

export default app; 