import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  LifebuoyIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";

const NavItem = ({ to, label, icon }) => {
  return (
    <Link className="flex hover:text-orange-500" to={to}>
      <span className="w-6 mr-2">{icon}</span> {label}
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((state) => state?.cart?.cart);

  const links = [
    {
      to: "/search",
      label: "Search",
      icon: <MagnifyingGlassIcon />,
    },
    {
      to: "offers",
      label: "Offers",
      icon: <ReceiptPercentIcon />,
    },
    {
      to: "help",
      label: "Help",
      icon: <LifebuoyIcon />,
    },
    {
      to: "account",
      label: "Profile",
      icon: <UserIcon />,
    },
    {
      to: "cart",
      label: `Cart ${cartItems?.length}`,
      icon: <ShoppingBagIcon />,
    },
  ];

  return (
    <div className="p-6 shadow-lg">
      <div className="flex items-center justify-between m-auto max-w-screen-xl">
        <div className="w-16">
          <Link to={"/"}>
            <img data-testid="logo" src={logo} />
          </Link>
        </div>
        <div className="hidden md:flex [&>*]:ml-12 font-semibold">
          {links.map((link) => (
            <NavItem to={link.to} label={link.label} icon={link.icon} />
          ))}
        </div>
        <div className="flex md:hidden">
          <Link to={"offers"}>Offers</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
