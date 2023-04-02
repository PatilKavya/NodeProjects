//const http=require('http');
const path=require('path')
const express = require("express");
const bodyParser = require("body-parser");

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contactRoutr=require('./routes/contact')
// const loginRouter=require('./routes/login');
// const messageRouter=require('./routes/message')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRoutr);

// app.use(loginRouter);

// app.use(messageRouter)
app.use('/success',(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>')
}
)
app.use((req,res)=>{
res.status(404).sendFile(path.join(__dirname,'./','views','nopage.html'))
})
// const server=http.createServer(app);

app.listen(8080);
