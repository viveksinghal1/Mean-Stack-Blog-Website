const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    gender: String,
    college: String,
    passingYear: String,
    course: String,
    profileImg: String,
    job: String,
    company: String,
    since: Date,
    views: Number,
    likes: Number,
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model("User", userSchema);