import express from "express";

import {
  updorder,
  addOrder,
  findAllorders,
  deleteOrderByID,
  findOrderByID,
  monthlyrevenue,
} from "../../models/orders/Order";

export const addneworder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const neworder = req.body;
    const orders = await addOrder(neworder);
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateorder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const order = req;
    const Updatedorder = await updorder(order);

    return res.status(200).json(Updatedorder);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteorder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const order = req;
    await deleteOrderByID(order);
    return res.status(200).json("order has been deleted succefully");
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findorder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const order = req;
    const searchedorder = await findOrderByID(order);
    return res.status(200).json(searchedorder);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findAllorder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const orders = await findAllorders(req, res);
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findrevenue = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const income = await monthlyrevenue(req, res);
    return res.status(200).json(income);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
