var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String
});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var postModel = mongoose.model("Post", postSchema);