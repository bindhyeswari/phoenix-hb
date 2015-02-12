/**
 * @desc This object handles the routes for candidates; Path for candidates: /candidates
 * */

var CandidateModel = require('../models/candidate');

var router = require('express').Router();

var talin = new CandidateModel({
    name: 'Talin',
    email: 'talin@gmail.com',
    college: 'UCSC',
    grad: 'CS'
});

talin.save(function (err, result) {
    if(err) console.log('There was an error saving ' + talin);
    else console.log(result);
});

module.exports = router;