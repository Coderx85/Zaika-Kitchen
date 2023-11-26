import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { RESTAURANT_DATA } from "../../mocks/data";
import Shimmer from "./Shimmer";
import resList from "../../utils/mockData";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []); //empty dependency array => useEffect is called on every render

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4697247&lng=77.4956607&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setListOfRestaurants(json.data.cards[2].data.data.cards)
    console.log(json);

    // setListOfRestaurants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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

      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //filter the restaurant cards and update the UI

              //searchText

              console.log(searchText);
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilterRestaurant(filterRestaurant);
            }}
          >
            <i class="ri-search-line"></i>
          </button>
        </div>
      </div>

      <div className="res-container">
        {
          //javascript map function to loop over restraunt cards
          listOfRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
}

export default Body;
