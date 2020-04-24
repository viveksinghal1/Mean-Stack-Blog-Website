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
});

router.get("/:slug", middleware.verifyToken, async function(req, res){
    try {
        let article = await Article.findOne({slug: req.params.slug});
        
        if (article===null) {
            res.status(404).send(article);
        } else {
            if (!article.views.includes(req.userId)) {
                article.views.push(req.userId);
            }
            article = await article.save();
    
            let isAuthor = (req.userId)===(article.author.id.toString());
            // console.log(typeof req.userId);
            // console.log(typeof article.author.id);
            // console.log(article.views);
    
            if (isAuthor) {
                article = await Article.findOne({slug: req.params.slug}).populate("views likes dislikes");
            } else {
                article = await Article.findOne({slug: req.params.slug});
            }
    
            // console.log(article);
    
            res.status(200).json({
                isAuthor: isAuthor,
                article: article,
                userId: req.userId
            });
        }
    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }

});

router.post("/:slug/like", middleware.verifyToken, async function(req, res){
    try {

        let article = await Article.findOne({slug: req.params.slug});

        if (article) {
            if (!article.likes.includes(req.userId))
                article.likes.push(req.userId);
            let foundUserDislike = article.dislikes.some(function(dislike){
                return dislike.equals(req.userId);
            });

            if (foundUserDislike) {
                article.dislikes.pull(req.userId);
            }

            await article.save();

            // console.log(article.likes.length);
            // console.log("dislikes " + article.dislikes.length);

            res.status(200).send("Ok");

        } else {
            res.status(404).send("Article does not exist");
        }

    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post("/:slug/nonlike", middleware.verifyToken, async function(req, res){
    try {
        let article = await Article.findOne({slug: req.params.slug});
        if (article) {
            if (article.likes.includes(req.userId)) {
                article.likes.pull(req.userId);
                await article.save();
                res.status(200).send("ok");
                console.log(article.likes);
            } else {
                res.status(200).send("ok");
                console.log(article.likes);
            }
        } else {
            res.status(404).send("404 not found");
        }
    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post("/:slug/dislike", middleware.verifyToken, async function(req, res){
    try {

        let article = await Article.findOne({slug: req.params.slug});
        
        if (article) {
            if (!article.dislikes.includes(req.userId)) 
                article.dislikes.push(req.userId);
            
            let foundUserLike = article.likes.some(function(like){
                return like.equals(req.userId);
            });


            if (foundUserLike) {
                article.likes.pull(req.userId);
            }

            await article.save();

            // console.log(article.dislikes.length);
            // console.log("likes " + article.likes.length);

            res.status(200).send("Ok");
        } else {
            res.status(404).send("404 not found");
        }

    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

router.post("/:slug/nondislike", middleware.verifyToken, async function(req, res){
    try {

        let article = await Article.findOne({slug: req.params.slug});
        if (article) {
            if (article.dislikes.includes(req.userId)) {
                article.dislikes.pull(req.userId);
                await article.save();
                res.status(200).send("ok");
                console.log(article.dislikes);
            } else {
                res.status(200).send("ok");
                console.log(article.dislikes);
            }
        } else {
            res.status(404).send("404 not found");
        }

    } catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});


module.exports = router;