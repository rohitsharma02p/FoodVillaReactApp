import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../../utils/constants";
import { destructureRestaurantInfoAndMenu } from "../../utils/utils";

const useRestaurantMenu = (restaurantId) => {
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

  return [restaurantInfo, menuCategories];
};
export default useRestaurantMenu;
