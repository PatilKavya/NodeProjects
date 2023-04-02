const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in the middle Ware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><input type='number' name='quantity'/><button type='submit'>Add Product</button> </form>"
  );
  next();
});

router.post("/product", (req, res, next) => {
  console.log("in the middle Ware");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
