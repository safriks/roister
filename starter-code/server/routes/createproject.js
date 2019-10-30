const express = require("express");
const Project= require("../models/project");
const uploadCloud = require('../config/cloudinary.js');
const router = express.Router();

// var upload = multer({ dest: `${__dirname}/../uploads/` });

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: `${__dirname}/../uploads/`,
    filename(req, file, cb) {
      cb(null, `${new Date()}-${file.originalname}`);
    },
  });
  
const upload = multer({ storage });

router.post('/createproject', uploadCloud.single('picture'), function (req, res) {
      Project.create({
          name: req.body.name, 
          location: req.body.location,
          tagline: req.body.tagline,
          description: req.body.description,
          tags: req.body.tags,
          financing: req.body.financing,
          timing: req.body.timing,
          picture: req.file.picture,
          userId: mongoose.Types.ObjectId(req.body.userId)
        })
        .then(()=> {
            res.send("uploaded!")
        })
        .catch((err)=> {
            res.send("err", err)
        })
})

router.get("/createproject", (req, res)=> {
    Project.find()
        .then((createproject)=> {
            res.render("createproject", {createproject})
        })
        .catch((err)=> {
            res.send("err", err)
        })
})

module.exports = router;