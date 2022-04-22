const router = require('express').Router();
let UserRegistration = require('../models/userRegistration.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    UserRegistration.find()
        .then(userreg => res.json(userreg))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const userEmail = req.body.userEmail;
   const userPassword = req.body.userPassword;
   const passwordConfirmation = req.body.passwordConfirmation;

   const newUser = new UserRegistration({
       firstName,
       lastName,
       userEmail,
       userPassword,
       passwordConfirmation,
   });

   newUser.save()
    .then(() => res.json('User Registered!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    UserRegistration.findById(req.params.id)
        .then(userreg => res.json(userreg))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    UserRegistration.findByIdAndDelete(req.params.id)
        .then(userreg => res.json('User Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    UserRegistration.findById(req.params.id)
        .then(userreg => {
             userreg.firstName = req.body.firstName;
             userreg.lastName = req.body.lastName;
             userreg.userEmail = req.body.userEmail;
             userreg.userPassword = req.body.userPassword;
             userreg.passwordConfirmation = req.body.passwordConfirmation;

             userreg.save()
                .then(() =>res.json('Registration Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 