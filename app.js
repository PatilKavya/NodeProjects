//const http=require('http');

const express=require('express');
const bodyParser=require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req,res,next)=>{
console.log('in the middle Ware');
res.send("<form action='/product' method='POST'><input type='text' name='title'/><input type='number' name='quantity'/><button type='submit'>Add Product</button> </form>");
next();
})

app.use("/product", (req,res,next)=>{
    console.log('in the middle Ware');
console.log(req.body)
    res.redirect('/')
    })

app.use("/",(req,res,next)=>{
    console.log('in the other middle Ware');
   res.send('<h1>Hello next!</h1>');
   // next();
    })

// const server=http.createServer(app);

app.listen(8080)