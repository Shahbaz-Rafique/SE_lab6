var {db} = require('../utils/connect');

async function addProduct(data,res){
    try{
        db.collection('products').insertOne(data, (err, collection) => {
            if(err){
              console.log(err);
            }
            else{
              res.status(201).json("Added");
             }
          })
    }
    catch{
        res.status(201).json("error");
    }
}

module.exports={
    addProduct,
}