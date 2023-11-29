import { useState, useEffect } from "react";
import { RESTAURANT_BASE_URL } from "../constants";
import { showErrorToast } from "../toastUtils";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(RESTAURANT_BASE_URL);
      const json = await data.json();
      setRestaurants(json?.data?.cards);
      setFilteredRestaurants(json?.data?.cards);
    } catch (error) {
      showErrorToast(error.message);
    }
  };
  return [restaurants, filteredrestaurants, setFilteredRestaurants];
};

export default useRestaurant;
