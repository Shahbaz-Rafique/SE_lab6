var express = require('express');
var router = express.Router();
var deleteProductdata = require('../controllers/deleteProduct');

router.get('/',(req,res,next)=>{
    const data={
        id:req.query.id,
    }
    deleteProductdata.DeleteProduct(data,res);
  })
  module.exports = router;