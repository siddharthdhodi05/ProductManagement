import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; 
import productRoutes from "./routes/productRoutes.js"; 

dotenv.config();

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json()); 
app.use(cors(corsOption)); 

// Connect to Database
connectDB(); // Call the function to connect to the database

// Routes
app.use("/api/products", productRoutes); // Route for product-related operations

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
