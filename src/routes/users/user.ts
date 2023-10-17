import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUserStats,
} from "../../controllers/users/users";
import express from "express";
import {
  isAuthenticated,
  isOwner,
  verifyToken,
} from "../../middleware/middleware";
const router = express.Router();

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, verifyToken, getAllUsers);
  router.delete(
    "/users/:id",
    isAuthenticated,
    verifyToken,
    isOwner,
    deleteUser
  );
  router.patch("/users/:id", isAuthenticated, verifyToken, isOwner, updateUser);
  router.get("/users/stats", isAuthenticated, verifyToken, getUserStats);
};
