import Product from "../models/ProductModel.js";
import { v4 as uuidv4 } from "uuid"; 

export const addProduct = async (req, res) => {
  const { productName, productId, subCategory } = req.body;

  try {
    
    if (!productName || !productId || !subCategory || !Array.isArray(subCategory)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    
    const existingProduct = await Product.findOne({ productId });
    if (existingProduct) {
      return res.status(409).json({ message: "Product ID already exists" });
    }

   
    const updatedSubCategories = subCategory.map((sub) => ({
      ...sub,
      uniqueId: uuidv4(), 
    }));

    // Create new product
    const newProduct = new Product({
      productName,
      productId,
      subCategory: updatedSubCategories,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOne({ productId }); // Find product by productId

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};