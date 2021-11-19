const express = require("express");
const user = require("./MOCK_DATA.json");
console.log(user)
const app = express();
app.get("/",function(req,res){
res.send("Welcome to Home page")
});

app.get("/user", function(req,res){
    res.send(user);
   
})
app.listen(12345, function(){
    console.log("listen on port 12345")
})