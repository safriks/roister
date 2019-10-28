const express = require("express");
const router = express.Router();
const Picture = require("../models/project");
var multer  = require('multer');
var upload = multer({ dest: `${__dirname}/../uploads/` });

router.get("/createproject", (req,res)=> {
    res.render("CreateProject")
})
  
router.post('/createproject', upload.single('picture'), function (req, res) {
    Picture.create({title: req.body.name, path: req.file.filename})
        .then(()=> {
            res.send("uploaded!")
        })
        .catch((err)=> {
            res.send("err", err)
        })
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