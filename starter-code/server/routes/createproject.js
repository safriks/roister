const express = require("express");
const Project= require("../models/project");
const uploadCloud = require('../config/cloudinary.js');
const router = express.Router();
const mongoose = require("mongoose");

router.post('/createproject', uploadCloud.single('picture'), function (req, res) {
    debugger
    console.log(req.session.user)
      Project.create({
          name: req.body.name, 
          location: req.body.location,
          tagline: req.body.tagline,
          description: req.body.description,
          tags: req.body.tags,
          financing: req.body.financing,
          timing: req.body.timing,
          picture: req.file.url,
          userId: mongoose.Types.ObjectId(req.session.user._id)
        })
        .then(()=> {
            res.send("uploaded!")
        })
        .catch((err)=> {
            res.send("err", err)
        })
})


module.exports = router;