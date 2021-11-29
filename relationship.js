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


app.listen(2233,async function(){
    await connect();
    console.log("listening on port 2233");
})