const router = require('express').Router();
let UserRegistration = require('../models/userRegistration.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    UserRegistration.find()
        .then(registrations => res.json(registrations))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const userEmail = req.body.userEmail;
   const userPassword = req.body.userPassword;
   const passwordConf = req.body.passwordConf;

   const newRegistration = new UserRegistration({
       firstName,
       lastName,
       userEmail,
       userPassword,
       passwordConf,
   });

   newRegistration.save()
    .then(() => res.json('User Registered!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    UserRegistration.findById(req.params.id)
        .then(registration => res.json(registration))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    UserRegistration.findByIdAndDelete(req.params.id)
        .then(registration => res.json('Registration Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    UserRegistration.findById(req.params.id)
        .then(registration => {
             registration.firstName = req.body.firstName;
             registration.lastName = req.body.lastName;
             registration.userEmail = req.body.userEmail;
             registration.userPassword = req.body.userPassword;
             registration.passwordConf = req.body.passwordConf;

             registration.save()
                .then(() =>res.json('Registration Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 