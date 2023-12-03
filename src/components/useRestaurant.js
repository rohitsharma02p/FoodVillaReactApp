import { useState, useEffect } from "react";
import { RESTAURANT_BASE_URL } from "../constants";
import { showErrorToast } from "../toastUtils";
import { destructureRestaurants } from "../utils";

const useRestaurant = () => {
  const [topicalBannerRestaurants, setTopicalBannerRestaurants] = useState([]);
  const [whatsOnYourMindRestaurants, setWhatsOnYourMindRestaurants] = useState(
    []
  );
  const [topBrandsForYouRestaurants, setTopBrandsForYouRestaurants] = useState(
    []
  );
  const [
    restaurantGridListingRestaurants,
    setRestaurantGridListingRestaurants,
  ] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(RESTAURANT_BASE_URL);
      const json = await data.json();
      const {
        topicalBannerRestaurants: topicalBannerData,
        whatsOnYourMindRestaurants: whatsOnYourMindData,
        topBrandsForYouRestaurants: topBrandsData,
        restaurantGridListingRestaurants: gridListingData,
      } = destructureRestaurants(json?.data?.cards);

      setTopicalBannerRestaurants(topicalBannerData);
      setWhatsOnYourMindRestaurants(whatsOnYourMindData);
      setTopBrandsForYouRestaurants(topBrandsData);
      setRestaurantGridListingRestaurants(gridListingData);
      setFilteredRestaurants(gridListingData);
    } catch (error) {
      showErrorToast(error.message);
    }
  };

  return [
    filteredRestaurant,
    setFilteredRestaurants,
    {
      topicalBannerRestaurants,
      restaurantGridListingRestaurants,
    },
  ];
};

export default useRestaurant;
