const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/* GET /movies route */
router.get('/', (req, res, next) => {
    MovieModel.find()
    .then((movies) => {
        console.log(movies);
        res.render('movies', {movies})
    })
    .catch ((err) => console.log(err))
});

router.get('/movies', (req, res, next) => {
    MovieModel.find()
    .then((movies) => {
        res.redirect('/movies/details', {movies})
    })
    .catch((err) => console.log(err))
})



module.exports = router;
