import { IconButton } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Link } from "react-router-dom";
import { useState } from "react";

const TopNavbar = () => {
  const [inputVal, setInputVal] = useState("");

  const inputChangeHandle = (event, data) => {
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <nav className="bg-white-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo  */}
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  src="https://cartlow.com/web-assets/img/home/logo-cartlow.svg"
                  alt="company logo"
                  className="h-12 w-auto object-contain max-sm:mr-3 max-sm:h-10 mx-3"
                />
              </Link>
            </div>

            {/* Search Field */}
            <div className="sm:ml-6 justify-center w-[80%] flex items-center">
              <input
                type="text"
                onChange={(e) => {
                  inputChangeHandle(e, inputVal);
                }}
                placeholder="Search pre-loved & never-used products..."
                className="block relative w-full rounded-none border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <IconButton
                className="absolute right-10"
                style={{ backgroundColor: "transparent" }}
              >
                <FaMagnifyingGlass className="bg-red text-xl" />
              </IconButton>
            </div>
          </div>

          <div className="hidden max-sm:flex">
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </div>

          {/* Right Side Nav */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static max-sm:hidden sm:inset-auto sm:ml-6 sm:pr-0">
            {navigation.map((event) => (
              <Link
                key={event.id}
                to={event.to}
                className="text-gray-300  rounded-md px-3 py-2 text-sm font-medium mx-1"
              >
                <div className="text-center text-secondary">{event.icon}</div>
                <div className="text-ls text-black">{event.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

const navigation = [
  {
    id: 1,
    to: "/wishlist",
    title: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    id: 2,
    to: "/cart",
    title: "Cart",
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    id: 3,
    to: "/login",
    title: "User",
    icon: <PersonOutlineOutlinedIcon />,
  },
];
