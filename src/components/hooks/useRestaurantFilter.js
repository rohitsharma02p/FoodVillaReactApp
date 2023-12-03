import { useEffect, useState } from "react";
import { filterRestaurant } from "../../utils/utils";

const useRestaurantFilter = (restaurants) => {
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(filterRestaurant(search, restaurants));
  }, [restaurants, search]);

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };

  return {
    search,
    filteredRestaurants,
    handleFilterChange,
  };
};

export default useRestaurantFilter;
