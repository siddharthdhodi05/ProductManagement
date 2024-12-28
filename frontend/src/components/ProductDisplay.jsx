import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle any errors

  // Fetch products from the backend on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/products"); // Backend API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Assuming the backend sends the products as `products`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-lg font-semibold text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Products</h1>

      {/* Render products */}
      {products.map((product) => (
        <div
          key={product._id} // Ensure your product has a unique _id
          className="p-6 border border-gray-300 rounded-md shadow-sm mb-4"
        >
          <h2 className="text-xl font-bold">{product.productName}</h2>
          <p className="text-sm text-gray-500">{`Product ID: ${product.productId}`}</p>

          {/* Subcategories Section */}
          <div className="mt-4 space-y-4">
            {product.subCategory.map((sub, index) => (
              <div
                key={index} // Use index as key for subcategories if no unique identifier exists
                className="p-4 border border-gray-200 rounded-md"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold">Color</label>
                    <p>{sub.color}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold">Brand</label>
                    <p>{sub.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
