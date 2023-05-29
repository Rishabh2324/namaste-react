import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"about"}>
            <li>About Us</li>
          </Link>
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
