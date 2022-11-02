const express = require('express');
const data = require('./data');
const learningExports = require('./learningExports');

const app = express();

app.get("/",(req,res) => {
    res.write("Have a good day :) ");
    res.send();
});

app.get("/data",(req,res) => {
    res.json(data);
})

app.get("/learningExports",(req,res) => {
    res.json(learningExports);
})

app.listen(5000,() => {
    console.log("the server is running");
})