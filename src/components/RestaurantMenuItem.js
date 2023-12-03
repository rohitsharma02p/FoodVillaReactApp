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

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
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
        <p className="font-bold">₹{price / 100}</p>
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
