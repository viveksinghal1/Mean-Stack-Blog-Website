const express = require("express");
const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");
const fs = require("fs");
const User = require("../models/user");
const middleware = require("../middleware/index");
let router = express.Router();

const RSA_PRIVATE_KEY = fs.readFileSync("./keys/private.key");
const RSA_PUBLIC_KEY = fs.readFileSync("./keys/public.key");

router.post("/register", async function(req, res){
    try {
        let user1 = await User.findOne({ username: req.body.username });
        let user2 = await User.findOne({ email: req.body.email });
        if (user1) {
            res.status(409).send("This username is already registered");
        } else if (user2) {
            res.status(409).send("This email-id is already registered");
        } else {
            let encryptedPassword = cryptoJS.SHA256(req.body.password);
            let user = new User({
                username: req.body.username,
                password: encryptedPassword,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                college: req.body.college,
                passingYear: req.body.passingYear,
                course: req.body.course,
                profileImg: req.body.profileImg,
                job: req.body.job,
                company: req.body.company,
                since: req.body.since,
                views: [],
                likes: []
            });
            let registeredUser =  await user.save();
            try {
                let payload = { subject: registeredUser._id };
                let token = jwt.sign(payload, RSA_PRIVATE_KEY, { expiresIn: '86400s', algorithm: 'RS256' });
                res.status(201).json({
                    idToken: token,
                    expiresIn: 86400,
                    username: registeredUser.username
                });
            } catch(err) {
                console.log(err);
                res.status(401).send(err);
            }
        }
    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// router.post("/register", function(req, res){
//     User.findOne({ username: req.body.username }, function(err, user1){
//         if (err) {
//             console.log(err);
//             res.status(500).send(err);
//         } else if (user1) {
//             res.status(409).send("This username is already registered");
//         } else {
//             User.findOne({ email: req.body.email }, function(err, user2){
//                 if (err) {
//                     console.log(err);
//                     res.status(500).send(err);
//                 } else if (user2) {
//                     res.status(409).send("This email is already registered");
//                 } else {
//                     let encryptedPassword = cryptoJS.SHA256(req.body.password);
//                     let user = new User({
//                         username: req.body.username,
//                         password: req.body.password,
//                         email: req.body.email,
//                         firstName: req.body.firstName,
//                         lastName: req.body.lastName,
//                         gender: req.body.gender,
//                         college: req.body.college,
//                         passingYear: req.body.passingYear,
//                         course: req.body.course,
//                         profileImg: req.body.profileImg,
//                         job: req.body.job,
//                         company: req.body.company,
//                         since: req.body.since,
//                         views: 0,
//                         likes: 0
//                     });

//                     user.save(function(err, registeredUser) {
//                         if (err) {
//                             console.log(err);
//                             res.status(500).send(err);
//                         } else {
//                             try {
//                                 let payload = { subject: registeredUser._id };
//                                 let token = jwt.sign(payload, RSA_PRIVATE_KEY, { expiresIn: '86400000', algorithm: 'RS256' });
//                                 res.status(201).json({
//                                     idToken: token,
//                                     expiresIn: 86400000
//                                 });
//                             } catch(err) {
//                                 console.log(err);
//                                 res.status(401).send(err);
//                             }
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });

router.post("/login", async function(req, res){
    try {
        let foundUser = await User.findOne({username: req.body.username});
        if (!foundUser) {
            res.status(401).send("Invalid Username");
        } else {
            let formPassword = cryptoJS.SHA256(req.body.password).toString();
            if (formPassword!==foundUser.password) {
                res.status(401).send("Incorrect Password");
            } else {
                try {
                    let payload = { subject: foundUser._id };
                    let token = jwt.sign(payload, RSA_PRIVATE_KEY, { expiresIn: '86400s', algorithm: 'RS256' });
                    res.status(200).json({
                        idToken: token,
                        expiresIn: 86400,
                        username: foundUser.username
                    });
                } catch(err) {
                    res.status(401).send("Error in saving in the DB");
                }
            }
        }
    } catch(err) {
        return res.status(500).send("Server Error");
    }
});

router.get('/users/:username', middleware.verifyToken, async function(req, res){
    try {
        let user = User.findOne({username: req.params.username});
        if (!user) {
            res.status(401).send("Non-Authenticated");
        } else {
            res.status(200).send(user);
        }
    } catch(err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;