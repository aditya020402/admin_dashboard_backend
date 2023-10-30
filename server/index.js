import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
// perform Routes import 

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js";


//perform data model imports 

// import User from "./models/User.js";
// import Product from "./models/Product.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";


//perform data imports and enter them in the database

// import {
//     dataUser,
//     dataProduct,
//     dataProductStat,
//     dataTransaction,
//     dataOverallStat,
//     dataAffiliateStat,
// } from "./data/index.js";

//perform configurations

dotenv.config({
    path:"./config/config.env"
});

// console.log(process.env.PORT);

const app = express();

app.use(express.json());
app.use(helmet());
// the following middle ware allows to use cors with helment
// it prevent helment from setting the cross origin embedder policy header
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors()); 

//routes
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/sales",salesRoutes);
app.use("/managment",managementRoutes);


mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
}
).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Server running on ${process.env.PORT}`)});

    //adding data one time into the db

    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);

})
.catch((error)=>console.log(`${error} did not connect`));






