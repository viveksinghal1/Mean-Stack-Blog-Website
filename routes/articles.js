const express = require("express");
let router = express.Router();
const Article = require("../models/article");
const middleware = require("../middleware/index");
const User = require("../models/user");

// GET ROUTE
router.get('/', async function(req, res){
    try {
        let allArticles = await Article.find({});
        res.status(200).send(allArticles);
    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post('/', middleware.verifyToken, async function(req, res){
    
    try {
        let d = (new Date()).toDateString();

        let user = await User.findById(req.userId);

        let slug = await middleware.generateUniqueSlug(req.body.title);
        let newArticle = new Article({
            title: req.body.title,
            slug: slug,
            caption: req.body.caption,
            content: req.body.content,
            timeCreated: d,
            category: req.body.category,
            author: {
                id: req.userId,
                username: user.username
            },
            likes: [],
            dislikes: [],
            views: []
        });

        let savedArticle = await newArticle.save();
        // console.log(savedArticle);
        res.status(200).send(savedArticle);
    } catch(err) {
        console.log(err);
        res.status(400).send("Bad Request");
    }
})



module.exports = router;