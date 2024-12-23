import React, { useState } from "react";
import emailjs from "emailjs-com";

type NavBarProps = {
  cartItems: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
};

const NavBar: React.FC<NavBarProps> = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;

    const orderDetails = cartItems
      .map(
        (item) =>
          `${item.quantity} x ${item.name} ($${(
            item.quantity * item.price
          ).toFixed(2)})`
      )
      .join(", ");

    emailjs
      .send(
        "", // Replace with your EmailJS service ID
        "", // Replace with your EmailJS template ID
        { email, order: orderDetails },
        "" // Replace with your EmailJS user ID
      )
      .then((response) => {
        alert("Email sent successfully!");
        console.log("Email sent:", response.status, response.text);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.error("Email error:", error);
      });
  };

  return (
    <div>
      <nav
        className="flex items-center h-16 bg-green-500 text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <div className="pl-3">
          <img src="jbicon.png" alt="JB Logo" className="h-12 w-12" />
        </div>
        <div className="pl-4">
          <h1 className="text-3xl font-bold text-green-100 font-serif">
            Juicebox Store
          </h1>
        </div>
        <div className="ml-auto pr-3">
          <button onClick={toggleCart} className="">
            <img src="cart.svg" alt="Cart" className="h-9 w-12" />
          </button>
        </div>
      </nav>

      {/* Cart Popup */}
      {isCartOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 w-80 rounded-md z-50">
          <h2 className="text-xl font-bold mb-2">Your Cart</h2>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <form onSubmit={handlePurchase}>
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 w-full"
            >
              Checkout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavBar;
