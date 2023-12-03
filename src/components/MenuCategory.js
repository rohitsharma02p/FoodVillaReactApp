import RestaurantMenuItem from "./RestaurantMenuItem";

const MenuCategory = ({ category }) => {
  return (
    <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 text-white text-4xl font-extrabold text-center py-4">
        {category.title}
      </h2>
      <div className="p-4 space-y-4">
        {category.itemCards.map((itemCard, index) => (
          <RestaurantMenuItem key={index} item={itemCard.card.info} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
