import MenuCategory from "./MenuCategory";

const RestaurantMenuList = ({ menuCategories }) => {
  return (
    <div className="mx-auto p-4 max-w-2xl">
      {menuCategories.map((category, index) => (
        <MenuCategory key={index} category={category} />
      ))}
    </div>
  );
};

export default RestaurantMenuList;
