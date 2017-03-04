var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        
        }
    ]
});

var User = mongoose.model("User", userSchema);

User.create({
    email: "bob@bob.com",
    name: "Boby McGee"
}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});

Post.create({
    title: "How too cook your shoes.",
    content: "Meow!"
}, function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});