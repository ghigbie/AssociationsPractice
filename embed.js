var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//POST - title, content - this needs to be defined first
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);


//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //telling mongoose to use an array of post and associate with a user
});

var User = mongoose.model("User", userSchema);


var newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown II"
});

newUser.posts.push({
   title: "How to tame your beagle",
   content: "Just kidding. Snoopy will never obey anyone!"
});


newUser.save(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});

// var newPost = new Post({
//     title: "Reflections on Stuff",
//     content: "Stuff is good."
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "Charlie Brown II"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});