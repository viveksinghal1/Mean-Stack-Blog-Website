const jwt = require("jsonwebtoken");
const fs = require("fs");
const RSA_PUBLIC_KEY = fs.readFileSync("./keys/public.key");
const RSA_PRIVATE_KEY = fs.readFileSync("./keys/private.key");
const User = require("../models/user");
const Article = require("../models/article");

let middleware = {};

middleware.verifyToken = async function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Non-Authenticated");
    }
    let token = req.headers.authorization.split(' ')[1];
    let username = req.headers.authorization.split(' ')[2];
    if (token==='null' || username===null) {
        return res.status(401).send("Non-Authenticated");
    }

    try {
        let payload = await jwt.verify(token, RSA_PUBLIC_KEY, {algorithms: 'RS256'});
        req.userId = payload.subject;
        let user = await User.findById(payload.subject);
        if (user)
            next();
        else
            res.status(401).send("Non-Authenticated");
        
    } catch(err) {
        return res.status(401).send("Non-Authenticated");
    }
}

// async function generateUniqueSlug(id, articleTitle, slug) {
//     try {
//         // generate the initial slug
//         if (!slug) {
//             slug = slugify(articleTitle, 1);
//         }
//         // check if a campground with the slug already exists
//         var articles = await Article.find({slug: {$regex: "^"+slug}});
//         let article = await Article.findOne({slug:slug});
//         let count = articles.count();
//         // check if a campground was found or if the found campground is the current campground
//         if (!articles || (count==1 && article._id.equals(id))) {
//             return slug;
//         }
//         // if not unique, generate a new slug
//         var newSlug = slugify(articleName, count+1);
//         // check again by calling the function recursively
//         return await generateUniqueSlug(id, articleName, newSlug);
//     } catch (err) {
//         throw new Error(err);
//     }
// }

middleware.generateUniqueSlug = async function(articleTitle) {
    try {
        let reg = new RegExp("^"+articleTitle+"$", "i");
        let articles = await Article.find({title: {$regex: reg}});
        console.log(articles);
        let count = articles.length;
        let slug = await slugify(articleTitle, count);
        return slug;
    } catch(err) {
        throw new Error(err);
    }
}

function slugify(text, count) {
    var slug = text.toString().toLowerCase()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
        .replace(/\-\-+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');          // Trim - from end of text

        if (count==0)
        return slug;
    else
        return slug + "-" + count;  // Add 4 random digits to improve uniqueness
}

module.exports = middleware;