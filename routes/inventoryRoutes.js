import express from "express";
// import Inventory from "../models/Inventory.js";
import Inventory from "../models/Inventory.js";
const router = express.Router();

/**
 * GET /api/inventory
 */
router.get("/", async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch inventory" });
  }
});

/**
 * POST /api/inventory (optional seed)
 */
router.post("/", async (req, res) => {
  try {
    const item = await Inventory.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to add item" });
  }
});

export default router;
