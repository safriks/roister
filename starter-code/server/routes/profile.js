const express = require("express");
const Project= require("../models/project");
const User= require("../models/user");
const router = express.Router();
const mongoose = require("mongoose");

router.get('/Profile/:userId', function (req, res) {
    User.findById(req.params.userId)
    .then((user)=>{
        Project.find({userId: req.params.userId})
        .then((projects)=>{
            res.json({
                user: user,
                projects: projects,
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;