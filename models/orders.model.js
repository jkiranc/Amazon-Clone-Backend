var mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    orderId: {type: String, require: true},
    orderDate: { type: String, required: true },
    orderBasket: { type: Array, default: [] },
    orderTotal: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", schema);

module.exports = Orders;
