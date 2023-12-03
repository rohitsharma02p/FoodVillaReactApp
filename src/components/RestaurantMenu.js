import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../constants";
import { destructureRestaurantInfoAndMenu } from "../utils";
import RestaurantInfo from "./RestaurantInfo";
import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [menuCategories, setmenuCategories] = useState([]);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
    const json = await data.json();
    const {
      restaurantMenu: restaurantMenuData,
      restaurntInfo: restaurantInfoData,
    } = await destructureRestaurantInfoAndMenu(json?.data?.cards);
    setRestaurantInfo(restaurantInfoData);
    setmenuCategories(restaurantMenuData);
  };

  return !restaurantInfo || restaurantInfo.length === 0 ? (
    <div className="mt-8 md:mt-8 flex justify-center">
      <Shimmer numberOfCards={12} />
    </div>
  ) : (
    <div className="mt-8 md:mt-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <RestaurantInfo restaurant={restaurantInfo} />
        <RestaurantMenuList menuCategories={menuCategories} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
