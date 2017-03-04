var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String
});

var User = mongoose.model("User", userSchema);

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    posts: [postSchema] //telling mongoose to 
});


var Post = mongoose.model("Post", postSchema);

var newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
});

newUser.post.push({
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