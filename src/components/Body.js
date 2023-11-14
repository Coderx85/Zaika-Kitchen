import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { RESTAURANT_DATA } from "../../mocks/data";
import resList from "../../utils/mockData";

function Body() {
  return (
    <div className="res-container">
      {
        //javascript map function to loop over restraunt cards
        resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
      }
    </div>
  );
}

export default Body;
