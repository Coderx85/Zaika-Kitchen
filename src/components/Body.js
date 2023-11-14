import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { RESTAURANT_DATA } from "../../mocks/data";
import resList from "../../utils/mockData";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []); //empty dependency array => useEffect is called on every render

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="
    );
    const json = await data.json();
    // setListOfRestaurants(json.data.cards[2].data.data.cards)
    console.log(json);
  };

  return (
    <div className="body-container">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Rating: 4.0+
        </button>
      </div>

      <div className="res-container">
        {
          //javascript map function to loop over restraunt cards
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
}

export default Body;
