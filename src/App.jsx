import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S8",
      price: 399.99,
      quantity: 1,
      image: "/images/samsung-galaxy-s8.jpg",
    },
    {
      id: 2,
      name: "Google Pixel",
      price: 499.99,
      quantity: 1,
      image: "/images/google-pixel.jpg",
    },
    {
      id: 3,
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
      quantity: 1,
      image: "/images/xiaomi-redmi-note-2.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy S7",
      price: 599.99,
      quantity: 1,
      image: "/images/samsung-galaxy-s7.jpg",
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id? {...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
         ? {...item, quantity: item.quantity > 1? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id!== id)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Cart Management System</h1>
        <div className="cart-icon flex items-center">
          <i className="fas fa-shopping-cart text-2xl mr-2"></i>
          <span className="cart-count text-lg bg-blue-300 p-3 rounded-full">{cartItems.length}</span>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item mb-4 p-4 bg-white shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="cart-item-details ml-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <div className="quantity-control flex items-center mt-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total mb-4 p-4 bg-white shadow-md">
        <h3 className="text-lg font-bold">Total:</h3>
        <p className="text-lg">${calculateTotal().toFixed(2)}</p>
      </div>
      <button
        onClick={handleClearCart}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default App;