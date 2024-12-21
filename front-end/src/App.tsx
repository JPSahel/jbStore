import React, { useState } from "react";
import Catalogue from "./assets/Catalouge";
import Categories from "./assets/Categories";
import NavBar from "./assets/NavBar";
import { Product } from "./assets/Catalouge";

type CartItem = Pick<Product, "_id" | "name" | "price"> & {
  quantity: number;
};

const App: React.FC = () => {
  const [activeFlavors, setActiveFlavors] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleFlavorsChange = (flavors: string[]) => {
    setActiveFlavors(flavors);
  };
  const addToCart = (product: Product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  return (
    <div>
      <NavBar cartItems={cartItems} />
      {/* Flavor Selector */}
      <Categories
        activeFlavors={activeFlavors}
        onFlavorsChange={handleFlavorsChange}
      />

      {/* Catalogue Filtered by Selected Flavors */}
      <Catalogue activeFlavors={activeFlavors} addToCart={addToCart} />
    </div>
  );
};

export default App;
