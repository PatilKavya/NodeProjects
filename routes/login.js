const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" 
    action="/login" method="POST">
      <input  id="username" type="text" name="name" />
      <button type="submit">Submit</button>
    </form>`
  );
});

router.post("/login",(req,res,next)=>{
   const name= req.body.name;
   console.log(name)
    res.redirect('/')
})



module.exports=router;
