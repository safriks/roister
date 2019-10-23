const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../models/user");

router.post("/signup", (req,res)=> {
    User.findOne({$or: [{username: req.body.username, email: req.body.email}]})
        .then((user)=> {
            if(user) res.send("Email or username is already taken")
            else {
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if(err) res.send(err.message)
                    else {
                        User.create({
                            username: req.body.username,
                            password: hash,
                            email: req.body.email,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        })
                        .then((user)=> {
                            req.session.user = user
                            res.send({user}); // sends back to the client user information
                        })
                        .catch((err)=> {
                            res.send(err.message)
                        })
                    }
                })
            }
        })
    })   

router.get("/signup", (req,res)=> {
  console.log(req.session)
    res.render("auth/signup");
})

router.post("/login", (req,res)=> {
    User.findOne({email: req.body.email})
        .then((user)=> {
            console.log(user)
            if(!user) res.send("Invalid credentials")
            else {
                bcrypt.compare(req.body.password, user.password, function(err, equal) {
                    if(err) res.send(err);
                    else if(!equal) res.send("Invalid password");
                    else {
                        req.session.user = user;
                        res.redirect("/movies");
                    }
                });
            }
        })
        .catch(err=> {
            res.send("error erropr", err);
        })
})

router.get("/login", (req, res) => {
  console.log(req.session)
    res.render("auth/login");
})

router.get("/logout", (req, res)=> {
    req.session.destroy();
    res.redirect("/");
})

module.exports = router;