import productModel from "../models/productModel.js";

export const sellController = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        if (!name) {
            return res.send({ message: "Name is required" });
        }
        if (!description) {
            return res.send({ message: "Description is required" });
        }
        if (!price) {
            return res.send({ message: "Price is required" });
        }

        const products = await productModel({ name, description, price }).save();
        res.status(201).send({
            success: true,
            message: 'Product added',
            products
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in adding",
            error
        })
    }
};