//express is middleware that helps talk to the server
const express =  require('express');
//cors is a way to provide information across websites
const cors = require('cors');
//mongoose is a library that helps talk to the mongodb database
const mongoose = require('mongoose');


//dotenv is an environment folder that keeps secured connection authentications and tokens
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
//server can accept json in the body of a request
app.use(express.json());

//Connection to Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
});

//Routes
//StudentRegistration Route
const studentRegRouter = require('./routes/studentRegRoute');
app.use('/studentregistration', studentRegRouter);

//Scoresheets Route
const scoresheetRouter = require('./routes/scoresheetRoute');
app.use('/scoresheets', scoresheetRouter);

const userRegistrationRouter = require('./routes/userRegRoute');
app.use('/register',userRegistrationRouter );

//Server listening
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});