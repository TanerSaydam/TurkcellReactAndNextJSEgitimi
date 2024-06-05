const express = require("express");
const app = express();

app.get("/",(req,res)=> {
    return res.json({message: "api is working..."})
});

app.listen(5000, ()=>{
    console.log("Uygulama http://localhost:5000 üzerinden ayakata!");
});


