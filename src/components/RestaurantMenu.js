import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurantMenu from "./hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantInfo, menuCategories] = useRestaurantMenu(restaurantId);

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
