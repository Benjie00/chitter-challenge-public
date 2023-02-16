import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import { peeps } from "./routes/peeps.js";
import { login } from "./routes/login.js";
import { createAccount } from "./routes/createAccount.js";
import { deletePost } from "./routes/deletePost.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

let app = express();

const main = async () => {
  console.log(`Connecting to database at: ${process.env.DBURI}`);

  try {
    await mongoose.connect(process.env.DBURI);
    console.log(`Connected to the database at: ${process.env.DBURI}`);
  } catch (e) {
    console.log(`Database failed to connect: ${e.message}`);
  }
};

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", peeps);
app.use(`/login`, login);
app.use(`/createAccount`, createAccount);
app.use(`/deletePost`, deletePost);

main();

const server = app.listen(process.env.PORT, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`App is listerning at: http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
