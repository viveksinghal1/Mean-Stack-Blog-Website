const mongoose = require("mongoose");
const middleware = require("../middleware/index");

const articleSchema = mongoose.Schema({
    title: String,
    slug: {
        type: String,
        unique: true
    },
    caption: String,
    content: String,
    timeCreated: { type: String, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    category: String,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    views: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

// articleSchema.pre('save', async function (next) {
//     try {
//         // check if a new campground is being saved, or if the campground name is being modified
//         if (this.isNew || this.isModified("title")) {
//             this.slug = await middleware.generateUniqueSlug(this.title);
//         }
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = mongoose.model('Article', articleSchema);
