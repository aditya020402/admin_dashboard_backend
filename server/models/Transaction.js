import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId:String,
    const:String,
    products:{
        type:[mongoose.Types.ObjectId],
        of:Number,
    }
},
{timestamps:true},
)

const Transaction = mongoose.model("Transaction",schema);
export default Transaction;