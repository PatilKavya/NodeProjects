const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in the other middle Ware");
  res.send("<h1>Hello next!</h1>");
  // next();
});

module.exports = router;
