
import { CDN_URL } from "./logo";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, locality }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
      <img
        alt="Restaurant"
        className="w-full h-56 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-500">{locality}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 font-bold">{avgRating}</span>
          <span className="ml-2 text-sm text-gray-400">Rating</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
