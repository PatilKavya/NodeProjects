const express = require("express");
const path=require('path');
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in the other middle Ware");
  res.sendFile(path.join(__dirname,'../','views','shop.html'))
  // next();
});

module.exports = router;
