import express from "express";
import users from "./users/user";
import products from "./products/product";
import orders from "./orders/order";
import cart from "./cart/cart";
import auth from "./auth/auth";
const router = express.Router();
//API routes 
export default (): express.Router => {
  users(router);
  products(router);
  orders(router);
  cart(router);
  auth(router);
  return router;
};
