import mongoose from "mongoose";

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  } catch (error) {
    console.error(" MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
