import { Link } from "react-router-dom";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const NavTab = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-5">{icon}</div>
      <p className="uppercase text-xs my-1">{label}</p>
    </div>
  );
};

const BottomNavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-4 md:hidden">
      <Link to={"/"}>
        <NavTab icon={<MagnifyingGlassIcon />} label="chwiggy" />
      </Link>
      <Link to={"/search"}>
        <NavTab icon={<MagnifyingGlassIcon />} label="search" />
      </Link>
      <Link to={"/cart"}>
        <NavTab icon={<ShoppingBagIcon />} label="cart" />
      </Link>
      <Link to={"/account"}>
        <NavTab icon={<UserIcon />} label="account" />
      </Link>
    </div>
  );
};

export default BottomNavigationBar;
