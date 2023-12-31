import express from "express";

import {
  updproduct,
  addProduct,
  findAllProducts,
  deleteProductByID,
  findProductByID,
} from "../../models/product/Product";

// Insert new product
export const addnewProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log(req.body, "req.body");
    const newProduct = req.body;
    const products = await addProduct(newProduct);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

//Update product by ID
export const updateProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const product = req;
    const Updatedproduct = await updproduct(product);

    return res.status(200).json(Updatedproduct);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// delete product by ID
export const deleteProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const product = req;
    await deleteProductByID(product);
    return res.status(200).json("Product has been deleted succefully");
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

//find Product by ID
export const findProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const product = req;
    const searchedProduct = await findProductByID(product);
    return res.status(200).json(searchedProduct);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// find All products

export const findAllProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const products = await findAllProducts(req, res);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
