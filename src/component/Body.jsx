import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./shimmer";
import { filterData } from "../../utils/helper";
import useonline from "../../utils/useonline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  const Isonline = useonline();

  if (!Isonline) {
    return <h1 className="text-center text-xl text-red-600 font-semibold mt-10">Please check your internet connection</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-4 md:p-6 bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="text"
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Search for a restaurant"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />

        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
            className="hover:no-underline text-inherit"
          >
            <Restaurantcard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
