import express from "express";
import { isAuthenticated, verifyToken } from "../../middleware/middleware";
import {
  addnewcart,
  deletecart,
  updatecart,
  findAllcart,
  findcart,
} from "../../controllers/cart/cart";

const router = express.Router();

export default (router: express.Router) => {
  router.post("/cart/addnew", isAuthenticated, verifyToken, addnewcart);
  router.put("/cart/:id", isAuthenticated, verifyToken, updatecart);
  router.delete("/cart/:id", isAuthenticated, verifyToken, deletecart);
  router.get("/cart/", isAuthenticated, verifyToken, findAllcart);
  router.get("/cart/:id", isAuthenticated, verifyToken, findcart);
};
