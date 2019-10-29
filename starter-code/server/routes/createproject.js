const express = require("express");
const router = express.Router();
const Project= require("../models/project");
var multer  = require('multer');
var upload = multer({ dest: `${__dirname}/../uploads/` });

router.get("/createproject", (req,res)=> {
    res.render("CreateProject")
})
  
router.post('/createproject', upload.single('picture'), function (req, res) {
    const {name, tagline, tags, } = req.body;
    const userId = req.session.user._id 
      Project.create({title: req.body.name, path: req.file.filename})
        .then(()=> {
            res.send("uploaded!")
        })
        .catch((err)=> {
            res.send("err", err)
        })
    // Picture.create({title: req.body.name, path: req.file.filename})
    //     .then(()=> {
    //         res.send("uploaded!")
    //     })
    //     .catch((err)=> {
    //         res.send("err", err)
    //     })
})

router.get("/profile", (req, res)=> {
    Picture.find()
        .then((pictures)=> {
            res.render("pictures", {pictures})
        })
        .catch((err)=> {
            res.send("ERROR ERROR", err)
        })
})

module.exports = router;