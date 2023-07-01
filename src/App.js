import "./App.css";
import React from "react";

/**
 *  Header
 *    Logo
 *    Nav Items
 *      -Home
 *      - About
 *      - Contact
 *
 * Body
 *    Search
 *    Restaurant Container
 *      Restaurant Cards
 *
 * Footer
 *    Copyright
 *    Links
 *
 */

// Composition --- putting one componnet inside another component

const restaurants = [
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
  {
    id: 1,
    name: "Kerala Culture",
    cuisines: "South Indian, Kerela, Fast Food, Arabia",
    starRating: "4.2",
    time: "30 min",
    cost: "350",
  },
];

const HeaderComponent = () => {
  return (
    <nav className="nav-bar">
      <img
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"
        alt="restaurant-logo"
      ></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const SearchComponent = () => {
  return (
    <div className="search">
      <input type="text" className="search-text"></input>
      <button>Search</button>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cuisines, starRating, time, cost } = props.res_details;

  return (
    <div className="restaurant-card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/azv9es7a92xxycs7oxjm"
        alt="rest-pic"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>

      <div className="res-info">
        <h4>{starRating}</h4>
        <h4>{time}</h4>
        <h4> {`${cost} for two`}</h4>
      </div>
    </div>
  );
};

// props

const BodyComponent = () => {
  return (
    <>
      <SearchComponent />
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard res_details={restaurant} />
        ))}
      </div>
    </>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">
      <h1> Copyright </h1>
      <h2> Links </h2>
    </div>
  );
};

// JSX should have one parent element

// React Fragment

function App() {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
}

export default App;

// Config driven UI
