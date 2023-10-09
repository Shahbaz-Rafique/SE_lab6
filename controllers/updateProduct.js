const {Product}=require('../Models/schema');

async function UpdateProduct(data,res){
    Product.updateOne(
        { _id: data.id },
        {
          name: data.name,
          description: data.description,
          price: data.price,
        }
      )
        .exec()
        .then((doc) => {
            res.status(201).json("updated");
        })
        .catch((err) => {
          console.error(err);
        });
}

module.exports={
    UpdateProduct,
}