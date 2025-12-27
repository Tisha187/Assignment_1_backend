import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import connectDB from "./config/db.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/inventory", inventoryRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Inventory API running");
});

// export for vercel
export default serverless(app);
