import express from "express";
import Peep from "../models/peepModel.js";

const router = express.Router();

router.route("/:id").delete(async (req, res) => {
  try {
    const result = await Peep.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send("Document not found");
    }
    res.send("Document deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export { router as deletePost };
