import { IconButton } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <nav className="bg-white-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo  */}
            <div className="flex flex-shrink-0 items-center">
              <img
                src="https://cartlow.com/web-assets/img/home/logo-cartlow.svg"
                alt="company logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="sm:ml-6 justify-center w-[80%] flex items-center">
              <input
                type="text"
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
