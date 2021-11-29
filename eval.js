const e = require('express');
const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/Evaluation",{useUnifiedTopology: true,useNewUrlParser: true })
};

const userSchema = new mongoose.Schema({
    company:{type:String, required: true},
    job:{type:String, required: true},
    skill:{type:String, required: true},
    rating:{type:String, required: true},
    city:{type:String, required: true},
    notice:{type:String, required: true },

});
const User = new mongoose.model("user",userSchema);

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

app.get("/users",async(req,res)=>{
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

app.listen(567, async function(){
await connect();

console.log("listening on port 5678...");
})