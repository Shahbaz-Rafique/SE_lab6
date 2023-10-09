var express = require('express');
var router = express.Router();
var updateProductController = require('../controllers/updateProduct');

router.put('/',(req,res,next)=>{
    var name=req.body.name;
    var description=req.body.description;
    var price=req.body.price;
    var id=req.body.id;
    var data = {
      name:name,
      description: description,
      price: price,
      id:id,
    };
    updateProductController.UpdateProduct(data,res);
  })
  module.exports = router;