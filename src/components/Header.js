import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // let btnName = "Login";
  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)

  const [searchText, setSearchText] = useState("");

  return (
    <div className="contain">
      <div className="header">
        <div className="brand">
          <h1 className="brand_name">Baratie</h1>
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {" "}
              <Link to="/cart">Cart</Link>
            </li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {" "}
              {btnName}{" "}
            </button>
          </ul>
        </div>
      </div>
      <div className="banner-wrapper">
        <h1 className="title">Baratie</h1>
        <h2 className="title-desc">
          We understand starving people more than anyone
        </h2>
        <div className="search-bar">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
              <button className="search-btn">Search</button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;