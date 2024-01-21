import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js';
import cors from 'cors';
import productModel from "./models/productModel.js";

dotenv.config();

connectDB();

const app = express();
const port = 8000;

app.use(morgan(`dev`));
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoute);

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/getproduct", (req, res) => {
    productModel.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
})

app.listen(8000, () => {
    console.log(`server connected ${port}`);
})
