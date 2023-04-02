const express = require("express");
const fs = require("fs");

const router = express.Router();
let data = [];
router.get("/", (req, res, next) => {
  fs.readFile("content.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "no chats exist";
    }
    res.send(
      `${data}
  <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"  method="POST">
    <input type="text" name="message" id="message" placeholder="message"/>
    <input type="hidden" name="username" id="username" />
    <button type="submit">Send</button>
  </form>`
    );
  });
});

router.post("/", (req, res, next) => {
  let message = req.body.message;
  let name = req.body.username;
  //console.log(message,name);

  data.push(`{${name}:${message}}`);
  console.log(data);

  //fs.readFile('content.txt');
  fs.appendFile("content.txt", ` ${name} : ${message}`, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("success");
  });

  res.redirect("/");
});

// router.post("/login",(req,res,next)=>{
//     res.redirect('/')
// })

module.exports = router;
