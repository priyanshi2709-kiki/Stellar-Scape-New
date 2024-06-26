const express = require('express');
const router = express.Router();
const Model = require('../Models/user')

// to add data
router.post('/add', (req,res) => {
    console.log(req.body)
    // storing data in MongoDB
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)  // 500 err means that there is an error in the code and not the server, it has to checked at the terminal of that particular code
    });
})
router.post('/authenticate',(req,res) => {
    Model.findOne(req.body) // 
    .then((result) => {
        if (result) res.json(result);
        else res.status(400).json({message: 'login: failed'});
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})
router.post('/getall',(req,res) => {
    Model.find({}) // display all the data in that particular DB
    .then((result) => {
        res.join(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})