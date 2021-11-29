const express = require('express');

const mongooes = require('mongooes');

const app = express();

app.use(express.json());

const connect = () => {
    return mongooes.connect("mongodb://127.0.0.1:27017/Evaluation")
};




app.listen(5678, async function(){
await connect();

console.log("listening on port 5678...");
})