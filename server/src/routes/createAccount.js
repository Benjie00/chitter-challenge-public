import express from "express";

const router = express.Router();

import User from "../models/userModel.js";

router.route(`/`).post((req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, email) => {
    if (email) {
      res.send({ message: `Email already exists` });
    } else {
      const user = new User(req.body);
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: `Account created successfully` });
        }
      });
    }
  });
});

export { router as createAccount };
