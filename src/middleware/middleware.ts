import express from "express";
import { merge, get } from "lodash";
import jwt from "jsonwebtoken";
import { getUserBySessionToken } from "../../src/models/users/User";
require("dotenv").config();


// verify JWT token 
export const verifyToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeaderToken: any = req.headers.authorization;
    if (authHeaderToken) {
      const token = authHeaderToken.split(" ")[1];
      jwt.verify(token, process.env.JWT_SCERET, (err: any, user: any) => {
        console.log(token, err, "err");
        if (err) res.status(403).json("Token is not valid!");
        merge(req, { user: user });
        return next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// Verification of session cookie
export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies[`${process.env.COOKIE}`];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// checking if current user is owner
export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
