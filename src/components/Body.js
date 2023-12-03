import useRestaurant from "./hooks/useRestaurant";
import Carousel from "./Carousel";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import useOnline from "./hooks/useOnline";
import OfflinePopup from "./OfflinePopup";
import useRestaurantFilter from "./hooks/useRestaurantFilter";

const Body = () => {
  const { topicalBannerRestaurants, restaurantGridListingRestaurants } =
    useRestaurant();
  const { search, filteredRestaurants, handleFilterChange } =
    useRestaurantFilter(restaurantGridListingRestaurants);
  const isOnline = useOnline();

  const renderContent = () => {
    if (
      topicalBannerRestaurants.length === 0 ||
      restaurantGridListingRestaurants.length === 0
    ) {
      return <Shimmer numberOfCards={12} />;
    }

    if (filteredRestaurants.length === 0) {
      return (
        <h1 className="text-3xl font-semibold text-center text-gray-800 mt-8">
          No restaurant found
        </h1>
      );
    }

    return <Restaurant restaurants={filteredRestaurants} />;
  };

  return (
    <div className="p-4">
      <Carousel restaurants={topicalBannerRestaurants} />
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search Restaurants"
          value={search}
          onChange={handleFilterChange}
          className="border-2 ml-48 border-gray-300 rounded p-2 w-80 focus:border-blue-500 focus:outline-none"
        />
      </div>
      {renderContent()}
      {!isOnline && <OfflinePopup />}
    </div>
  );
};

export default Body;
