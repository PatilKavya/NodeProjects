const path=require('path')


exports.getProduct=(req, res, next) => { 
    res.sendFile(path.join(__dirname,'../','views','admin.html'))
  }

  exports.postProduct=(req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  }

exports.getShop=(req, res, next) => {
    console.log("in the other middle Ware");
    res.sendFile(path.join(__dirname,'../','views','shop.html'))

  }