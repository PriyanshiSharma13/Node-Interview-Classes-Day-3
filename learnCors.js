const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

app.get("/addUser",(req,res)=>{
    console.log(req.query);
    res.send("success");
})

app.put("/editUser/:Salary",(req, res) =>{
    console.log(req.params);
    res.send("success");
})

app.listen(8000);
