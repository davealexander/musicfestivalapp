const router = require('express').Router();
let Studentregistration = require('../models/studentRegistration.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    Studentregistration.find()
        .then(registrations => res.json(registrations))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const grade = req.body.grade;
   const instrument1 = req.body.instrument1;
   const instrument2 = req.body.instrument2;
   const school = req.body.school;
   const ensemble1 = req.body.ensemble1;
   const ensemble2 = req.body.ensemble2;
   const preference = req.body.preference;

   const newRegistration = new Studentregistration({
       firstName,
       lastName,
       grade,
       instrument1,
       instrument2,
       school,
       ensemble1,
       ensemble2,
       preference,
   });

   newRegistration.save()
    .then(() => res.json('Student Registered!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    Studentregistration.findById(req.params.id)
        .then(registration => res.json(registration))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    Studentregistration.findByIdAndDelete(req.params.id)
        .then(registration => res.json('Registration Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    Studentregistration.findById(req.params.id)
        .then(registration => {
             registration.firstName = req.body.firstName;
             registration.lastName = req.body.lastName;
             registration.grade = req.body.grade;
             registration.instrument1 = req.body.instrument1;
             registration.instrument2 = req.body.instrument2;
             registration.school = req.body.school;
             registration.ensemble1 = req.body.ensemble1;
             registration.ensemble2 = req.body.ensemble2;
             //registration.preference = req.body.preference;

             registration.save()
                .then(() =>res.json('Registration Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 