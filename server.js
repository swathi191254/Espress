const express = require("express");

console.log(user)
const app = express();
console.log(app)
const user = require("./MOCK_DATA.json");
app.get("/",function(req,res){
res.send("Welcome to Home page")
});

app.get("/user", function(req,res){
    res.send(user);
   
})
app.post("/user",(req,res)=>{
    res.json("post request")
})
app.listen(1234, function(){
    console.log("listen on port 1234")
})