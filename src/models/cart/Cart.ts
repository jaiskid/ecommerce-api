import mongoose from "mongoose";
import express from "express";
const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    carts: [
      {
        cartId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export const CartModel = mongoose.model("Cart", CartSchema);

export const updcart = (req: express.Request) =>
  CartModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

export const deletecartByID = (req: express.Request) =>
  CartModel.findByIdAndDelete(req.params.id);
export const findcartByID = (req: express.Request) =>
  CartModel.findById({ userId: req.params.userId });
export const findAllcarts = (req: express.Request, res: express.Response) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let carts;
  if (qNew) {
    carts = CartModel.find().sort({ createdAt: -1 }).limit(1);
  } else if (qCategory) {
    carts = CartModel.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else {
    carts = CartModel.find();
  }
  return carts;
};

export const addcart = (values: Record<string, any>) =>
  new CartModel(values).save().then((cart) => cart.toObject());
