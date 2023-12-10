import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { ASSETS_BASE_URL } from "../utils/constants";
import { FaTrash } from "react-icons/fa";
import { ContentWithHeader } from "./Header";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <ContentWithHeader>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 font-semibold mt-5 mb-3 text-center">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="w-full">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-300 p-4 mb-4 rounded-lg flex items-center justify-between w-1/4 mx-auto"
                >
                  <div className="flex items-center">
                    {item?.imageId ? (
                      <img
                        src={ASSETS_BASE_URL + `/${item.imageId}`}
                        alt={item.name}
                        className="w-12 h-12 mr-4 rounded-full object-cover"
                      />
                    ) : null}
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="text-sm text-gray-800 mt-2">
                        Price: ₹{item.price / 100}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 mr-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" // Styling for the button
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </ContentWithHeader>
  );
};

export default Cart;
