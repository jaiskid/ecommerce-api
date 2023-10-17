import crypto from "crypto";
require("dotenv").config();

// authentication function for adding salt with password before inserting into DB
export const authentication = (salt: string, password: string): string => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.SECRET)
    .digest("hex");
};
// random function which generate randow byte string using base64
export const random = () => crypto.randomBytes(128).toString("base64");
