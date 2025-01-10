import React, { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  flavor: string[];
  description: string;
  price: number;
  brand: string;
  picture: string;
};

type CatalogueProps = {
  activeFlavors: string[];
  addToCart: (product: Product) => void;
};

const Catalogue: React.FC<CatalogueProps> = ({ activeFlavors, addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://privjbstore.onrender.com/api/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by active flavors
  useEffect(() => {
    if (activeFlavors.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          activeFlavors.every((flavor) => product.flavor.includes(flavor))
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [activeFlavors, products]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Catalogue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded p-4 flex flex-col items-center pb-[-6]"
          >
            <img
              src={`${product.picture}`}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="text-gray-800 font-bold mt-2">${product.price}</p>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <p className="text-gray-500 text-sm mt-1">
              <strong>Brand:</strong> {product.brand}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
