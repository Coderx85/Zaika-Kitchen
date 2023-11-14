import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { RESTAURANT_DATA } from "../../mocks/data";
import resList from "../../utils/mockData";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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
