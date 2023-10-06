import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // let btnName = "Login";

  return (
    <div className="header">
      <div className="brand">
        <img
          className="brand_logo"
          src={LOGO_URL} //js variable is given in curly braces
        />
        <h1 className="brand_name">Baratie 🍖👨🏻‍🍳</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {" "}
            {btnName}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
