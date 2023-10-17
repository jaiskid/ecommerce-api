import express from "express";
const router = express.Router();
import { register, login } from "../../controllers/auth/auth";
export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
