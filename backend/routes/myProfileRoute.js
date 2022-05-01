const router = require('express').Router();
const MyProfile = require('../models/myprofile.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    MyProfile.find()
        .then(myprofile => res.json(myprofile))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const userEmail = req.body.userEmail;
   const MMEANumber = req.body.MMEANumber;
   const school = req.body.school;
   const address1 = req.body.address1;
   const address2 = req.body.address2;
   const city = req.body.city;
   const state = req.body.state;
   const zipcode = req.body.zipcode;
   const phoneNumber = req.body.phoneNumber;

   const newProfile = new MyProfile({
       firstName,
       lastName,
       userEmail,
       MMEANumber,
       school,
       address1,
       address2,
       city,
       state,
       zipcode,
       phoneNumber,
   });

   newProfile.save()
    .then(() => res.json('Profile Updated!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    MyProfile.findById(req.params.id)
        .then(myprofile => res.json(myprofile))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    MyProfile.findByIdAndDelete(req.params.id)
        .then(myprofile => res.json('Profile Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    MyProfile.findById(req.params.id)
        .then(myprofile => {
             myprofile.firstName = req.body.firstName;
             myprofile.lastName = req.body.lastName;
             myprofile.userEmail = req.body.userEmail;
             myprofile.MMEANumber = req.body.MMEANumber;
             myprofile.school = req.body.school;
             myprofile.address1 = req.body.address1;
             myprofile.address2 = req.body.address2;
             myprofile.city = req.body.city;
             myprofile.state = req.body.state;
             myprofile.zipcode = req.body.zipcode;
             myprofile.phoneNumber = req.body.phoneNumber;

             myprofile.save()
                .then(() =>res.json('Profile Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 