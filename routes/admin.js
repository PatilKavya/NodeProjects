const express = require("express");

const router = express.Router();
const path=require('path');
const productController=require('../controllers/products')

router.get("/add-product", productController.getProduct );

router.post("/add-product", productController.postProduct);

module.exports = router;
