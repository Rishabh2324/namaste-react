import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8">
      <div className="w-16">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
      </div>
      <div className="hidden md:flex [&>*]:ml-5">
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About Us</Link>
        <Link to={"offers"}>Offers</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"cart"}>Cart</Link>
      </div>
      <div className="flex md:hidden">
        <Link to={"offers"}>Offers</Link>
      </div>
    </div>
  );
};

export default Header;
