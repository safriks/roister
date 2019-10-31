const express = require("express");
const Project= require("../models/project");
const User= require("../models/user");
const router = express.Router();
const mongoose = require("mongoose");

router.get('/project', function (req, res) {
    User.findById(req.session.user._id)
    .then((user)=>{
        Project.find({userId: req.session.user._id})
        .then((projects)=>{
            res.json({
                user: user,
                projects: projects
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

router.get("/project", (req, res)=> {
    Project.findByIdAndDelete(req.params.project._id)
      .then((project)=> {
        res.json({
            project: project, 
        })
        res.render("/Project")
      })
      .catch((err)=> {
        res.send(err)
      })
  })

module.exports = router;