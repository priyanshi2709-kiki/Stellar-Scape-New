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
router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log("User Data Deleted");
        res.status(200).json({ status: "success", result });
      })
      .catch((err) => {
        console.error("Error deleting user data", err);
        res.status(500).send("Error deleting user data");
      });
  });
router.get('/getall',(req,res) => {
    Model.find({}) // display all the data in that particular DB
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})
router.get("/getbyemail/:email", (req,res) => {
    console.log(req.params.email);
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})
router.put('/update/:id', (req,res) =>{
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.get("/getuser/:id",(req,res) =>{
    Model.findById(req.params.id)
    .then((result)=> {
       res.json(result).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
})
router.get("/getbygithubuser/:username", (req, res) => {
    Model.findOne({username: req.params.username})
      .then((result) => {
        console.log("User Data Retrieved");
        res.status(200).json(result);
      })
      .catch((err) => {
        console.error("Error retrieving user data", err);
        res.status(500).send("Error retrieving user data");
      });
  });
module.exports = router;
