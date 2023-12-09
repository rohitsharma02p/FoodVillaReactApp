import { useState, useEffect } from "react";
import { showErrorToast } from "../../utils/toastUtils";
import { destructureRestaurants } from "../../utils/utils";
import { RESTAURANT_BASE_URL } from "../../utils/constants";

function useRestaurant() {
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

  useEffect(() => {
    if (navigator.onLine) {
      fetchRestaurant();
    } else {
      console.log("User is offline. Cannot fetch restaurant data.");
    }
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
    } catch (error) {
      showErrorToast(error.message);
    }
  };

  return {
    topicalBannerRestaurants,
    restaurantGridListingRestaurants,
  };
}

export default useRestaurant;
