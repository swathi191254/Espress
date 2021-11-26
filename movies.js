const express = require('express');

const mongoose = require('mongoose');

const app = express();

const connect = () =>{return mongoose.connect("mongodb://localhost:27017/assignment",
{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology: true})}
app.use(express.json())
    

const movieSchema = new mongoose.Schema({
    movie_title:{type:String, required: true },
    movie_genre:{type:String, required: true },
    production_year:{type:String, required: true },
    budget:{type:String, required: true }
},{
    versionKey:false,
    timestamps:true,

});

const Movie  =  mongoose.model('movies',movieSchema)

app.get("/movies",async(req, res)=>{
    const movie = await Movie.find({});
    console.log(movie);

    return res.status(201).send(movie);
});

app.post("/movies",async(req, res)=>{
    const movie = await Movie.create(req.body);
console.log(movie);
    res.status(201).send(movie);
});

app.get("/movies/:id",async(req, res)=>{
    const movie = await Movie.findById(req.params.id);

    res.status(200).send(movie);
})

app.patch("/movies/:id",async(req, res)=>{
try{
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
res.status(201).send(movie);
}
catch(e){
    return res.status(500).json({message: e.message});
}
});


app.delete("/movies/:id",async(req, res)=>{
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
})



app.listen(2233,async function(){
    await connect();
    console.log("listening on port 2233");
})