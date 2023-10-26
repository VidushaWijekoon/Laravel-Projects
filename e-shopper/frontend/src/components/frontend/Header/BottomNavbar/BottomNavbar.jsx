import { IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import AllCategories from "./AllCategories";

const BottomNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-[2.5rem] items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div
                  className="cursor-pointer flex bg-primary rounded-none text-secondary px-16 py-2 capitalize font-semibold text-sm"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <div className="flex">
                    <MenuOutlinedIcon className="mr-2" />
                    <span className="items-center flex">All Categories</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div className="text-secondary px-3 py-2 text-sm font-medium flex">
                    <Link className="flex items-center capitalize">Laptop</Link>
                  </div>
                  <div className="text-secondary px-3 py-2 text-sm font-medium flex">
                    <Link className="flex items-center capitalize">
                      Mobile Phones
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute max-sm:hidden inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex space-x-4">
                <div className="text-secondary px-3 py-2 text-sm font-medium flex">
                  <IconButton>
                    <FaRegLightbulb className="text-sm" />
                  </IconButton>
                  <span className="flex items-center capitalize">
                    Clearance Up to 30% Off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggler */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Categories */}
      {isVisible ? <AllCategories /> : null}
    </>
  );
};

export default BottomNavbar;
