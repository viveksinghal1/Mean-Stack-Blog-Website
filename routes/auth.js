const express = require("express");
const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");
const fs = require("fs");
const User = require("../models/user");
let router = express.Router();

const RSA_PRIVATE_KEY = fs.readFileSync("./keys/private.key");
const RSA_PUBLIC_KEY = fs.readFileSync("./keys/public.key");

router.post("/register", async function(req, res){
    try {
        let user1 = await User.findOne({ username: req.body.username });
        let user2 = await User.findOne({ email: req.body.email });
        if (user1 || user2) {
            return res.status(409).send("This username is already registered");
        } else {
            let encryptedPassword = cryptoJS.SHA256(req.body.password);
            let user = new User({
                username: req.body.username,
                password: req.body.password,
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
                since: req.body.since
            });
            let registeredUser =  await user.save();
            try {
                let payload = { subject: registeredUser._id };
                let token = jwt.sign(payload, RSA_PRIVATE_KEY, { expiresIn: '86400s', algorithm: 'RS256' });
                return res.status(201).json({
                    idToken: token,
                    expiresIn: 86400
                });
            } catch(err) {
                console.log(err);
                return res.status(401).send(err);
            }
        }
    } catch(err) {
        return res.status(500).send("Server Error");
    }
});

router.post("/login", async function(req, res){
    try {
        let foundUser = User.findOne({username: req.body.username});
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
                        expiresIn: 86400
                    });
                } catch(err) {
                    res.status(401).send(err);
                }
            }
        }
    } catch(err) {
        return res.status(500).send("Server Error");
    }
});

module.exports = router;