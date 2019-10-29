const express = require("express");
const router = express.Router();
const Project= require("../models/project");

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: `${__dirname}/../uploads/`,
    filename(req, file, cb) {
      cb(null, `${new Date()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });
// var upload = multer({ dest: `${__dirname}/../uploads/` });

router.get("/createproject", (req,res)=> {
    res.render("CreateProject")
})
  
router.post('/createproject', upload.single('picture'), function (req, res) {
    console.log(req.body)
    console.log(req.file)

      Project.create({
          name: req.body.name, 
          location: req.body.location,
          tagline: req.body.tagline,
          tags: req.body.tags,
          picture: req.file.picture,
          userId: mongoose.Types.ObjectId(req.body.userId)
        })
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