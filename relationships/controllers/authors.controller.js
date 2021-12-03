const express = require("express");

const Author = require("../models/author.model");

const router = express.Router();

router.post("",async(req,res)=>{
    try {
        const author = await Author.create(req.body);

        return res.status(201).send(author);
    }catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const author = await Author.find().lean().exec();

        return res.send(author);
    } catch(e){
        return res.status(500).json({message:e.message, status:"Failed"});
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const author = await Author.findById(req.params.id).lean().exec();

        return res.send(author);
    } catch(e){
        return res.status(500).json({message:e.message, status:"Failed"});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(author);
    } catch(e){
        return res.status.json({meassage: e.message, status:"Failed"});
    }
});

router.delete("/:id", async(req,res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(author);

    } catch(e){
        return res.status(500).json({meassage: e.message, status:"Failed"});
    }
});

router.get("/:id/posts", async(req,res) =>{
    try {
        const author = await Author.findById(req.params.id)/lean().exec();
        const posts = await Post.find({tag_ids: tag._id})

        .populate("tag_ids")
        .lean()
        .exec();
    } catch(e){
        return res.status(500).json({message:e.message, status: 'Failed'});
    }
});

module.exports = router;