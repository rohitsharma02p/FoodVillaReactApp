export const filterRestaurant = (search, restaurantGridListingRestaurants) => {
  const searchTerm = search.toLowerCase();
  const filteredRestaurants = restaurantGridListingRestaurants.filter(
    (restaurant) => {
      const restaurantName = restaurant.info.name.toLowerCase();
      return restaurantName.includes(searchTerm);
    }
  );
  return filteredRestaurants;
};

export const destructureRestaurants = (restaurants) => {
  if (!restaurants || !Array.isArray(restaurants)) {
    return null;
  }

  const topicalBannerRestaurants = [];
  const whatsOnYourMindRestaurants = [];
  const topBrandsForYouRestaurants = [];
  const restaurantGridListingRestaurants = [];

  restaurants.forEach((restaurant) => {
    const cardType = restaurant?.card?.card?.["@type"];
    if (
      cardType === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
    ) {
      const restaurantCards = restaurant?.card?.card;

      switch (restaurantCards?.id) {
        case "topical_banner":
          const topicalBanner =
            restaurantCards?.gridElements?.infoWithStyle?.info;
          if (topicalBanner) {
            topicalBannerRestaurants.push(...topicalBanner);
          }
          break;
        case "whats_on_your_mind":
          const whatsOnYourMind =
            restaurantCards?.gridElements?.infoWithStyle?.info;
          if (whatsOnYourMind) {
            whatsOnYourMindRestaurants.push(...whatsOnYourMind);
          }
          break;
        case "top_brands_for_you":
          const topBrandsForYou =
            restaurantCards?.gridElements?.infoWithStyle?.restaurants;
          if (topBrandsForYou) {
            topBrandsForYouRestaurants.push(...topBrandsForYou);
          }
          break;
        case "restaurant_grid_listing":
          const restaurantGridListing =
            restaurantCards?.gridElements?.infoWithStyle?.restaurants;
          if (restaurantGridListing) {
            restaurantGridListingRestaurants.push(...restaurantGridListing);
          }
          break;
        default:
          break;
      }
    }
  });

  return {
    topicalBannerRestaurants,
    whatsOnYourMindRestaurants,
    topBrandsForYouRestaurants,
    restaurantGridListingRestaurants,
  };
};

export const destructureRestaurantInfoAndMenu = (restaurant) => {
  const restaurantMenu = [];
  let restaurntInfo = {};
  restaurant.forEach((card) => {
    if (card.hasOwnProperty("groupedCard")) {
      card?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach((card) => {
        if (
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          restaurantMenu.push(card?.card?.card);
        }
      });
    } else if (card.hasOwnProperty("card")) {
      if (
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ) {
        restaurntInfo = { ...card?.card?.card?.info };
      }
    }
  });
  return { restaurantMenu, restaurntInfo };
};
