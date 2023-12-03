import { Link } from "react-router-dom";
import { ASSETS_BASE_URL } from "../constants";
import { Link } from "react-router-dom";
const Restaurant = ({ restaurants }) => {
  if (!restaurants || restaurants.length === 0) {
    return null;
  }
  return (
    <>
      <h1 className="text-2xl font-semibold text-black-500 mb-5 ml-52">
        Restaurants with online food delivery in Delhi
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map(({ info }) => {
          const { id, name, avgRating, cloudinaryImageId } = info;
          return (
            <Link to={`restaurant/${id}`} key={cloudinaryImageId}>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={ASSETS_BASE_URL + cloudinaryImageId}
                  alt=""
                  className="w-80 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 00-.777.37l-2.773 3.47-4.107.596a1 1 0 00-.554 1.705l3.018 2.939-.712 4.143a1 1 0 001.451 1.054L10 13.937l3.724 1.96a1 1 0 001.451-1.055l-.712-4.143 3.018-2.939a1 1 0 00-.554-1.705l-4.107-.596-2.773-3.47A1 1 0 0010 2zm-1 11a1 1 0 00.276-.04l3-1.5a1 1 0 00.447-1.341l-1.305-3.957a1 1 0 00-.895-.664l-3.374-.489a1 1 0 00-.557.168l-2.68 1.334 1.563 4.77a1 1 0 00.411.51l2.546 1.323z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black">{avgRating}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Restaurant;
