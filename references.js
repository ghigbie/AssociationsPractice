var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email: "bill@bob.com",
//     name: "Billy McGee"
// }, function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("USER -Check");
//     }
// });

// Post.create({
//     title: "How too cook your shoes.",
//     content: "Meow!"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("POST Check");
//     }
// });

Post.create({
    title: "How too cook your shoes - part 4",
    content: "Meow! Meow! Mewo!"
}, function(err, post){
    User.findOne({email: "bob@bob.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            console.log(post + " pushed into " + foundUser.post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data)
                }
            });
        }
    });
//   if(err){
//         console.log(err);
//     }else{
//         console.log("Combo = check!");
//     }
});

//Find User and then find a post associated with that user

// User.findOne({email: "bob@bob.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });