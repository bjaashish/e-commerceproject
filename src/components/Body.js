import SearchComponent from "./Search";
import { restaurants } from "../common/restaurants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// Hooks --- JS Function "use"

const BodyComponent = () => {
  const [filteredRestaurantsArray, setFilteredRestaurants] =
    useState(restaurants);

  function filteredRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  return (
    <>
      <div className="filter-search-bar">
        <SearchComponent filteredRestaurants={filteredRestaurants} />
        <button className="top-rated">Top Rated Restaurants</button>
      </div>

      <div className="res-container">
        {filteredRestaurantsArray.map((restaurant) => (
          <RestaurantCard key={restaurant.id} res_details={restaurant} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
