import express from "express";
import mongoose from "mongoose";
import http from "http";
import router from "./routes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
require("dotenv").config();
// Main execution file for project 
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("Mongo connected successfully"))
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
app.use("/", router());
app.listen(process.env.PORT, () => {
  console.log("Backend server run successfully " + process.env.PORT);
});
