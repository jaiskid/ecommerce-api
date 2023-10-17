import mongoose from "mongoose";
import express from "express";
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Order", OrderSchema);

export const updorder = (req: express.Request) =>
  OrderModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

export const deleteOrderByID = (req: express.Request) =>
  OrderModel.findByIdAndDelete(req.params.id);
export const findOrderByID = (req: express.Request) =>
  OrderModel.findById({ userId: req.params.userId });
export const findAllorders = (req: express.Request, res: express.Response) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  let orders;
  if (qNew) {
    orders = OrderModel.find().sort({ createdAt: -1 }).limit(1);
  } else if (qCategory) {
    orders = OrderModel.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else {
    orders = OrderModel.find();
  }
  return orders;
};

export const addOrder = (values: Record<string, any>) =>
  new OrderModel(values).save().then((model) => model.toObject());

export const monthlyrevenue = (req: express.Request, res: express.Response) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  const income = OrderModel.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
  return income;
};
