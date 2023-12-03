const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="max-w-none mx-auto bg-white rounded-lg overflow-hidden shadow-md p-4">
      <h2 className="text-2xl font-bold">{restaurant.name}</h2>
      <p className="text-md text-gray-700">
        {restaurant.locality}, {restaurant.city}
      </p>
      <div className="my-2">
        <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">
          {restaurant.veg ? "Veg" : "Non-Veg"}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p>Cost for Two: {restaurant.costForTwoMessage}</p>
        <p className="text-green-600">
          {restaurant.avgRatingString} ({restaurant.totalRatingsString})
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
