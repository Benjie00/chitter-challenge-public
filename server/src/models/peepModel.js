import mongoose from "mongoose";

const peepSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    field: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Peep = mongoose.model("peep", peepSchema);

export default Peep;
