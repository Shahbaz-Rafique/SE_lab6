const {Product}=require('../Models/schema');

async function getProduct(res){
    Product.find({}).then((results) => {
        res.status(201).json(results);
      }).catch((err) => {
          console.log(err);
      });
}

module.exports={
    getProduct,
}