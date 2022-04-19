const router = require('express').Router();
let Scoresheet = require('../models/scoresheet.model');

// GET 
//Base pull of info
router.route('/').get((req,res) => {
    Scoresheet.find()
        .then(submissions => res.json(submissions))
        .catch(err => res.status(400).json('Error: ' + err));
});

//POST / Create
router.route('/add').post((req,res) => {
   const studentId = req.body.studentId;
   const scale1 = req.body.scale1;
   const scale2 = req.body.scale2;
   const scale3 = req.body.scale3;
   const comment1 = req.body.comment1;
   const comment2 = req.body.comment2;
   const comment3 = req.body.comment3;
   const score = req.body.score;

   const submitScoresheet = new Scoresheet({
        studentId,
        scale1,
        scale2,
        scale3,
        comment1,
        comment2,
        comment3,
        score,
   });

   submitScoresheet.save()
    .then(() => res.json('Scoresheet Submitted'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

//GET by MongodDB ID 
router.route('/:id').get((req,res) => {
    Scoresheet.findById(req.params.id)
        .then(submission => res.json(submission))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete by MongodDB ID 
router.route('/:id').get((req,res) => {
    Scoresheet.findByIdAndDelete(req.params.id)
        .then(submission => res.json('Scoresheet Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update by MongodDB ID 
router.route('/update/:id').post((req,res) => {
    Scoresheet.findById(req.params.id)
        .then(submission => {
             submission.scale1 = req.body.scale1;
             submission.scale2 = req.body.scale2;
             submission.scale3 = req.body.scale3;
             submission.comment1 = req.body.comment1;
             submission.comment2 = req.body.comment2;
             submission.comment3 = req.body.comment3;
             submission.score = req.body.score; 

             submission.save()
                .then(() =>res.json('Scoresheet Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 