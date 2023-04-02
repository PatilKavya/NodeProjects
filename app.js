//const http=require('http');

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopRouter)

app.use((req,res)=>{
res.status(404).send("<h2>Page Not Found</h2>")
})
// const server=http.createServer(app);

app.listen(8080);
