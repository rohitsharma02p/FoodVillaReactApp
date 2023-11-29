import React from "react";
import useRestaurant from "./useRestaurant";
import Carousel from "./Carousel";
import { showErrorToast } from "../toastUtils";

const Body = () => {
  const [restaurants, filteredrestaurants, setFilteredRestaurants] =
    useRestaurant();

  return (
    <>
      <Carousel filteredrestaurants={filteredrestaurants} />;
    </>
  );
};

export default Body;
