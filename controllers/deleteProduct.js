const {Product}=require('../Models/schema');

async function DeleteProduct(data,res){
    Product.deleteOne({ _id: data.id })
    .then(() => {
        res.status(201).json("deleted");
    })
    .catch((err) => {
    console.error(`Error deleting`, err);
    });
}

module.exports={
    DeleteProduct,
}


