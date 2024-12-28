import React, { useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({
    productName: "",
    productId: "",
    subCategory: [
      {
        color: "",
        brand: "",
      },
    ],
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubcategoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubcategories = [...product.subCategory];
    updatedSubcategories[index] = { ...updatedSubcategories[index], [name]: value };

    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategory: updatedSubcategories,
    }));
  };

  const addSubcategory = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategory: [...prevProduct.subCategory, { color: "", brand: "" }],
    }));
  };

  const removeSubcategory = (index) => {
    const updatedSubcategories = product.subCategory.filter((_, i) => i !== index);
    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategory: updatedSubcategories,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/products", product);
      console.log("Product added successfully:", response.data);

      // Reset form after successful submission
      setProduct({
        productName: "",
        productId: "",
        subCategory: [
          {
            color: "",
            brand: "",
          },
        ],
      });
    } catch (error) {
      console.error("There was an error adding the product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-semibold">
            Product Name
          </label>
          <input
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleProductChange}
            placeholder="Enter product name"
            className="w-full p-2 border rounded-md border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="productId" className="block text-sm font-semibold">
            Product ID
          </label>
          <input
            id="productId"
            name="productId"
            value={product.productId}
            onChange={handleProductChange}
            placeholder="Enter product ID"
            className="w-full p-2 border rounded-md border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-semibold">Subcategories</label>
        <div className="space-y-4">
          {product.subCategory.map((sub, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`subcategories.${index}.color`}
                    className="block text-sm font-semibold"
                  >
                    Color
                  </label>
                  <input
                    id={`subcategories.${index}.color`}
                    name="color"
                    value={sub.color}
                    onChange={(e) => handleSubcategoryChange(index, e)}
                    placeholder="Enter color"
                    className="w-full p-2 border rounded-md border-gray-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`subcategories.${index}.brand`}
                    className="block text-sm font-semibold"
                  >
                    Brand
                  </label>
                  <input
                    id={`subcategories.${index}.brand`}
                    name="brand"
                    value={sub.brand}
                    onChange={(e) => handleSubcategoryChange(index, e)}
                    placeholder="Enter brand"
                    className="w-full p-2 border rounded-md border-gray-300"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeSubcategory(index)}
                  className="text-sm text-red-500 flex items-center"
                >
                  <LuTrash2 className="w-4 h-4 mr-2" />
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addSubcategory}
            className="flex items-center text-sm text-blue-600"
          >
            <GoPlusCircle className="w-4 h-4 mr-2" />
            Add Subcategory
          </button>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
