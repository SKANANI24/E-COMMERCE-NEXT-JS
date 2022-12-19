const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID:{type : String , required: true},
    products:[{
        productID : {type :String},
        quantity : {type :Number , default:1}
    }],
    address : {type :String,required:true},
    amount : {type :Number,required:true},
    status : {type :String  , default: "Pending" , required:true}
},{timestamps:true});

mongoose.models={}; 
mongoose.set('strictQuery', false);
export default mongoose.model('Order' , orderSchema);