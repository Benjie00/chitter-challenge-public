import express from "express";
import Peep from "../models/peepModel.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Peep.find({}, (error, peeps) => {
    error
      ? res.status(404).json({ error: `Peeps not found` })
      : res.json(peeps);
  });
});

router.route("/").post(async (req, res) => {
  const newPeep = new Peep(req.body);
  try {
    console.log(newPeep);
    const peep = await newPeep.save();
    res.status(201).json(peep);
  } catch (e) {
    res.status(406).json({ error: `adding new peep failed` });
  }
});
export { router as peeps };
