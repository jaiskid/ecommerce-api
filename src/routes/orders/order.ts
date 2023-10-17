import express from "express";
import { isAuthenticated, verifyToken } from "../../middleware/middleware";
import {
  addneworder,
  deleteorder,
  updateorder,
  findAllorder,
  findorder,
  findrevenue,
} from "../../controllers/orders/order";

const router = express.Router();

export default (router: express.Router) => {
  router.post("/order/addnew", isAuthenticated, verifyToken, addneworder);
  router.put("/order/:id", isAuthenticated, verifyToken, updateorder);
  router.delete("/order/:id", isAuthenticated, verifyToken, deleteorder);
  router.get("/order/", isAuthenticated, verifyToken, findAllorder);
  router.get("/order/revenue", isAuthenticated, verifyToken, findAllorder);
  router.get("/order/:id", isAuthenticated, verifyToken, findorder);
};
