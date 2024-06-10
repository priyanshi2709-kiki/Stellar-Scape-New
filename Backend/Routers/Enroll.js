const express = require('express');
const router = express.Router();
const Model = require('../Models/Enroll');

router.post('/add', (req, res) => {
    console.log(req.body);
    // Storing data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
});

router.get('/getall', (req, res) => {
    Model.find({}).populate('project') //empty brackets will give all the data
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});
// since mongodb automatically generates id so we can use it also
router.get('/getbyid/:id', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.get('/check/:internid/:projectid', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findOne({ intern: req.params.internid, project: req.params.projectid })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
router.get('/getbyintern/:intern', (req, res) => {
    // getting data from client

    console.log(req.params.intern);
    // finding the data with given id
    Model.find({ intern: req.params.intern }).populate('project')
        .then((result) => {
            console.log(result);
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.get('/getbyproject/:project', (req, res) => {
    // getting data from client

    // finding the data with given id
    Model.find({ project: req.params.project }).populate('project')
        .then((result) => {
            console.log(result);
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});


router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });

});

router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.name);
    Model.findOne({ intern: req.params.intern, project : req.params.project }) //findone will give the first occurence of data if there is multiple similar data
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
module.exports = router;