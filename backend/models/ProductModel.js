import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; 

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productId: { type: String, required: true, unique: true },
  subCategory: [
    {
      color: { type: String, required: true }, // e.g., green, blue, etc.
      brand: { type: String, required: true }, // e.g., Apple, Samsung, etc.
      uniqueId: { type: String, default: uuidv4 }, // Unique ID for each subcategory
    },
  ],
});
const Product = mongoose.model("Product", productSchema);
export default Product;
