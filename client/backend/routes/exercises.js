const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const contact = req.body.contact

    const newExercise = new Exercise({
        username,
        email,
        contact});

        newExercise.save()
       .then(() => res.json('Exercise Added'))
       .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(user => res.json('Exercise  Deleted'))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
     .then(user => {
        user.username = req.body.username;
        user.email = req.body.email;
        user.contact = req.body.contact

        user.save
        .then(() => res.json('updated successfully....'))
        .catch(err => res.status(400).json('Error: '+ err))

    })
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports =router;