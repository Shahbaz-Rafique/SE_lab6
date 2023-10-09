var express = require('express');
var router = express.Router();
var getProductdata = require('../controllers/getProducts');

router.get('/',(req,res,next)=>{
    getProductdata.getProduct(res);
  })
  module.exports = router;