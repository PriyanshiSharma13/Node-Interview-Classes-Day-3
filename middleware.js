const express = require('express');
const Checking = require("./Routes/Checking")//importing

const app = express();

// middleware
const middleware1 = (req,res,next) =>{
    console.log('middleware1')
    next()
}
const middleware2 = (req,res,next) =>{
    console.log('middleware2')
    next()
}

app.use(middleware1)

app.get('/page1',(req,res)=>{
   res.send('page1 - both middleware 1 and 2 applied')
})//here we will get both middleware 1 and 2

app.get('/page2',middleware2, (req,res)=> {
    res.send('page2-middleware 2 only applied')
})
app.get('/page3',middleware2, (req,res)=> {
    res.send('page3 - - both middleware 1 and 2 applied')
})

app.use(express.json())

app.use("/auth",Checking)// linking child with parent

app.listen(9000,()=>{
    console.log('running');
});