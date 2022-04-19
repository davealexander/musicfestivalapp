const router = require('express').Router();
let Login = require('../models/login.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    Login.find()
        .then(login => res.json(login))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const userEmail = req.body.userEmail;
   const userPassword = req.body.userPassword;

   const newLogin = new Login({
        userEmail,
        userPassword,
   });

   newLogin.save()
    .then(() => res.json('Login successfull!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    Login.findById(req.params.id)
        .then(login => res.json(login))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    Login.findByIdAndDelete(req.params.id)
        .then(login => res.json('Login cancelled'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    Login.findById(req.params.id)
        .then(login => {
             login.userEmail = req.body.userEmail;
             login.userPassword = req.body.userPassword;

             Login.save()
                .then(() =>res.json('Login Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 