const express = require("express");
const user = require("../MOCK_DATA.json");
console.log(user)
const app = express();
console.log(app)
app.get("/",function(req,res){
res.send("Welcome to Home page")
});

app.get("/user", function(req,res){
    res.send(user);
   
})
app.listen(1234, function(){
    console.log("listen on port 1234")
})