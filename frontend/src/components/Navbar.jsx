import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-2xl font-bold">
            Product Manager
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300"
          >
            Product Form
          </Link>
          <Link
            to="/products"
            className="text-white text-lg hover:text-gray-300"
          >
            View Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
