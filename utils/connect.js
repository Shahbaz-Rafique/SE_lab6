var mongoose=require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
var db=mongoose.connection;
db.on('error',()=>console.log('error'))
db.once('open',()=>console.log('Database connected'))

module.exports={db}