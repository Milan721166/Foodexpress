import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resturant",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Placed", "Preparing", "Delivered", "Cancelled"],
    default: "Placed",
  },
  orderDate: { type: Date, default: Date.now },
});

orderSchema.set("timestamps", true);

const Order = mongoose.model("Order", orderSchema);

export default Order;
