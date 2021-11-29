const express = require('express');

const mongooes = require('mongooes');

const app = express();

app.use(express.json());

const connect = () => {
    return mongooes.connect("mongodb://127.0.0.1:27017/Evaluation")
};

const userSchema = new mongooes.Schema({
    company:{type:String, required: true},
    job:{type:String, required: true},
    skill:{type:String, required: true},
    rating:{type:String, required: true},
    city:{type:String, required: true},
    notice:{type:String, required: true },

});
const User = new mongooes.model("user",userSchema);

const postSchema = new mongooes.Schema({
    company: {type:String, required: true},
    job:{type:String, required: true},
    skill:{type:String, required: true},
    tags :[
        {type:mongooes.Schema.Types.ObjectId,ref:"tag", required: true}
    ],
},
{
    versionkey:false,
    timestamps:true
});

const Post = mongooes.model("Post",postSchema);

const tagSchema = mongooes.Schema({
    company:{type:String, required: true },
    post: {type:mongooes.Schema.Types.ObjectId,ref:"post", required: true}

})

const tag = mongooes.model("tag",tagSchema);





app.listen(5678, async function(){
await connect();

console.log("listening on port 5678...");
})