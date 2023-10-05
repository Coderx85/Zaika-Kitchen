import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img
          className="brand_logo"
          src= {LOGO_URL}  //js variable is given in curly braces
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

export default Header;
