require("dotenv").config();
const express = require("express");
const app = express();


app.get("/Test",(request,response)=>{
    response.send("Test successfull");

})
app.listen(4000,()=>{
    console.log("listen to this port 4000")
})
