const express = require("express");
const User= require("../models/user");
const router = express.Router();
const mongoose = require("mongoose");

router.get('/search', function (req, res) {
    User.find({$text: {$search: req.query.searchPhrase}})
    .then((search)=>{
        res.json(search)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;