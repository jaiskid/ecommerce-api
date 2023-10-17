import express from "express";
import { isAuthenticated, verifyToken } from "../../middleware/middleware";
import {
  addnewProduct,
  deleteProduct,
  updateProduct,
  findAllProduct,
  findProduct,
} from "../../controllers/products/product";

const router = express.Router();

export default (router: express.Router) => {
  router.post("/product/addnew", isAuthenticated, verifyToken, addnewProduct);
  router.put("/product/:id", isAuthenticated, verifyToken, updateProduct);
  router.delete("/product/:id", isAuthenticated, verifyToken, deleteProduct);
  router.get("/product/", isAuthenticated, verifyToken, findAllProduct);
  router.get("/product/:id", isAuthenticated, verifyToken, findProduct);
};
