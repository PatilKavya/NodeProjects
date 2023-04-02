//const http=require('http');

const express=require('express');

const app=express();

app.use((req,res,next)=>{
console.log('in the middle Ware');
//res.send('<h1>Hello World!</h1>');
next();
})

app.use((req,res,next)=>{
    console.log('in the other middle Ware');
   res.send('<h1>Hello next!</h1>');
   // next();
    })

// const server=http.createServer(app);

app.listen(8080)