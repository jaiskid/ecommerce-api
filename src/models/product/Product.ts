import mongoose from "mongoose";
import express from "express";

// Mongo DB schema for Product
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

// DB utility function for DB CRUD operation
export const ProductModel = mongoose.model("Product", ProductSchema);
export const updproduct = (req: express.Request) =>
  ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

export const deleteProductByID = (req: express.Request) =>
  ProductModel.findByIdAndDelete(req.params.id);
export const findProductByID = (req: express.Request) =>
  ProductModel.findById(req.params.id);
export const findAllProducts = (
  req: express.Request,
  res: express.Response
) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let products;
  if (qNew) {
    products = ProductModel.find().sort({ createdAt: -1 }).limit(1);
  } else if (qCategory) {
    products = ProductModel.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else {
    products = ProductModel.find();
  }
  return products;
};

export const addProduct = (values: Record<string, any>) =>
  new ProductModel(values).save().then((product) => product.toObject());
