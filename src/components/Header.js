import { useState } from "react";
// import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // let btnName = "Login";

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)

  return (
    <div className="contain">
      <div className="header">
        <div className="brand">
          {/* <img
            className="brand_logo"
            src={LOGO_URL} //js variable is given in curly braces
          /> */}
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
    </div>
  );
};

export default Header;
