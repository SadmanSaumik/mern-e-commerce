const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: Number, min: 1, required: true },
  },
  { timestamps: true, versionKey: false }
);
const cartModel = mongoose.model("carts", DataSchema);
module.exports = cartModel;
