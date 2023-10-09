var express = require('express');
var router = express.Router();
var addProductController = require('../controllers/addProduct');

router.post('/',(req,res,next)=>{
    console.log(req.body);
    var name=req.body.name;
    var description=req.body.description;
    var price=req.body.price;
    var data = {
      "name":name,
      "description": description,
      "price": price,
    };
    addProductController.addProduct(data,res);
  })
  module.exports = router;