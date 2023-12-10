import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuItem = ({ item }) => {
  const {
    name,
    category,
    description,
    inStock,
    isVeg,
    price,
    ratings,
    ribbon,
  } = item;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4 mb-6">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-gray-800 my-2">{description}</p>

      {ribbon && (
        <div
          className="py-1 px-3 inline-block rounded-full text-white"
          style={{ backgroundColor: ribbon.topBackgroundColor }}
        >
          {ribbon.text}
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <p
          className={`font-semibold ${
            isVeg ? "text-green-600" : "text-red-600"
          }`}
        >
          {isVeg ? "Veg" : "Non-Veg"}
        </p>
        <button
          onClick={() => handleAddItem()}
          className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:from-red-400 hover:to-yellow-400 focus:outline-none"
        >
          Add To Cart
        </button>
      </div>

      <div className="absolute top-0 right-0 bg-white text-gray-800 font-bold p-2">
        ₹{price / 100}
      </div>

      {ratings && ratings.aggregatedRating && (
        <div className="mt-2 text-sm text-gray-600">
          Rating: {ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCount})
        </div>
      )}

      {!inStock && <p className="text-red-600 text-sm mt-2">Out of Stock</p>}
    </div>
  );
};

export default RestaurantMenuItem;
