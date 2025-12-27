import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  type: String,
  date: String,
  qty: Number,
});

const InventorySchema = new mongoose.Schema({
  sku: String,
  name: String,
  stock: Number,
  events: [EventSchema],
});

export default mongoose.model("Inventory", InventorySchema);
