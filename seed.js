const mongoose = require("mongoose");
const User = require("./models/user");
const Article = require("./models/article");

async function seedDB() {
    try {
        allArticle = await Article.find({});
        allArticle.forEach(async (article)=> {
            let temp = [];
            article.views.forEach(async (view)=> {
                let user = await User.findById(view);
                temp.push({id: user._id, username: user.username, profileImg: user.profileImg});
            });

            article.views = temp;
            await article.save();
        })
    } catch(err) {
        console.log(err);
    }
}

module.exports = seedDB;