import express from "express";

import {
  updcart,
  addcart,
  findAllcarts,
  deletecartByID,
  findcartByID,
} from "../../models/cart/Cart";

export const addnewcart = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const newcart = req.body;
    const carts = await addcart(newcart);
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updatecart = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const cart = req;
    const Updatedcart = await updcart(cart);

    return res.status(200).json(Updatedcart);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deletecart = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const cart = req;
    await deletecartByID(cart);
    return res.status(200).json("cart has been deleted succefully");
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findcart = async (req: express.Request, res: express.Response) => {
  try {
    const cart = req;
    const searchedcart = await findcartByID(cart);
    return res.status(200).json(searchedcart);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const findAllcart = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const carts = await findAllcarts(req, res);
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
