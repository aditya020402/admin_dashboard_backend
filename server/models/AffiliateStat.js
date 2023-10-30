import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    affiliateSales:{
        type:[mongoose.Types.ObjectId],
        ref:"Transaction",
    }
},
{timestamps:true}
);

const AffiliateStat = mongoose.model("AffiliateStat",schema);
export default AffiliateStat;