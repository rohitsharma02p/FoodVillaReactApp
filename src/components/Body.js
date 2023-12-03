import React from "react";
import useRestaurant from "./useRestaurant";
import Carousel from "./Carousel";
import Restaurant from "./Restaurant";
import { useState } from "react";
import { filterRestaurant } from "../utils";
import Shimmer from "./Shimmer";

const Body = () => {
  const [
    filteredRestaurant,
    setFilteredRestaurants,
    { topicalBannerRestaurants, restaurantGridListingRestaurants },
  ] = useRestaurant();
  const [search, setSearch] = useState("");

  return topicalBannerRestaurants.length === 0 ||
    restaurantGridListingRestaurants.length === 0 ? (
    <Shimmer numberOfCards={12} />
  ) : (
    <>
      <div className="my-4 flex flex-col items-start">
        <Carousel restaurants={topicalBannerRestaurants} />
        <div className="my-4 mx-60">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => {
              const data = filterRestaurant(
                search,
                restaurantGridListingRestaurants
              );
              setFilteredRestaurants(data);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Filter Restaurants
          </button>
        </div>
        {filteredRestaurant.length === 0 ? (
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-center my-10 text-gray-900">
            No restaurant found
          </h1>
        ) : (
          <Restaurant restaurants={filteredRestaurant} />
        )}
      </div>
    </>
  );
};

export default Body;
