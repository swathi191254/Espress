
const express = require('express');

const mongoose = require('mongoose');
var connect = require('./config/db')


app.use(express.json());



const postSchema = new mongoose.Schema({
    company: {type:String, required: true},
    job:{type:String, required: true},
    skill:{type:String, required: true},
    tags :[
        {type:mongoose.Schema.Types.ObjectId,ref:"tag", required: true}
    ],
},
{
    versionkey:false,
    timestamps:true
});

const Post = mongoose.model("Post",postSchema);

const tagSchema = mongoose.Schema({
    company:{type:String, required: true },
    post: {type:mongoose.Schema.Types.ObjectId,ref:"post", required: true}

})

const tag = mongoose.model("tag",tagSchema);

app.get("/books",async(req,res)=>{
    const user = await User.find().lean().exec();
    return res.status(200).send({user})
})

app.get("/users/:id/posts",async(req,res)=>{
    const posts = await Post.find({skill : req.params.id}).lean().exec();
    const skill = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({posts,skill})
})


app.get("/posts", async(req, res) => {
     const post = await Post.find().lean().exec();
     return res.status(200).send({post})
})

app.listen(5679, async function(){
await connect();

console.log("listening on port 5679..");
})