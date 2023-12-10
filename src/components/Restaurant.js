import { Link } from "react-router-dom";
import { ASSETS_BASE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const Restaurant = ({ restaurants }) => {
  if (!restaurants || restaurants.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-left text-gray-800 mb-8">
        Restaurants with online food delivery in Delhi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map(({ info }) => (
          <Link
            to={`restaurant/${info.id}`}
            key={info?.cloudinaryImageId}
            className="block hover:shadow-lg"
          >
            <div className="bg-white rounded-lg overflow-hidden transition-shadow duration-200">
              <img
                src={`${ASSETS_BASE_URL}${info.cloudinaryImageId}`}
                alt={info.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{info.name}</h2>
                <div className="flex items-center">
                  <span className="h-5 w-5 mr-1">
                    <FaStar className="text-green-400 mr-1" />
                  </span>
                  <span className="text-gray-800">{info.avgRating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
