
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "./logo";
import Shimmer from "./shimmer";

const Restaurantmenu = () => {
  const { resid } = useParams();
  const [resInfo, setResInfo] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  

  useEffect(() => {
    restaurantFoodInfo();
  }, []);

  async function restaurantFoodInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();

      const restaurantData = json?.data?.cards[2]?.card?.card?.info;
      const menuCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const items = [];

      menuCards.forEach((card) => {
        const itemCards = card?.card?.card?.itemCards;
        if (itemCards) {
          itemCards.forEach((item) => {
            items.push(item.card.info);
          });
        }
      });

      setResInfo(restaurantData);
      setMenuItems(items);
    } catch (error) {
      console.log("Failed to fetch: ", error);
    }
  }

  return Object.keys(resInfo).length === 0 ? (
    <Shimmer />
  ) : (
   
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            {item.imageId && (
              <img
                src={CDN_URL + item.imageId}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                ₹{(item.price || item.defaultPrice) / 100}
              </p>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Restaurantmenu;
