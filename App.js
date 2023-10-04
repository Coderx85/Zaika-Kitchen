import React from "react";
import ReactDOM from "react-dom/client";

/* Basic layout of website- 

Header
   -logo
   -nav items

Body
   -Search
   -Restraunt Container
   -Restraunt Card
     -Img 
     -Name
     -Star Rating
     -Cuisine, delivery time
     -price

Footer
   -Copyright
   -links
   -Address
   -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img
          className="brand_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3d5OTRg8jgtxX22MoEYUWeP4haZ1K-GZoKqM3fb9i1quzE6wBvLI--RqegXHVYbKCkQ&usqp=CAU"
        />
        <h1 className="brand_name">Baratie</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
