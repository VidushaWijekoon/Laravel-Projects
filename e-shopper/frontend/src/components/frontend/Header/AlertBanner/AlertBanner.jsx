import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { useState } from "react";

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {!isVisible ? (
        <div className="alert-banner max-sm:hidden max-lg:hidden bg-alertSuccess flex z-[100] border-none m-0 text-sm rounded-none text-secondary px-4 py-0 items-center">
          <div className="close px-[1.25rem]">
            <IconButton onClick={() => setIsVisible(!isVisible)}>
              <ClearIcon
                className="text-textMuted cursor-pointer"
                style={{ fontSize: "20px" }}
              />
            </IconButton>
          </div>
          <div className="meta flex mx-auto justify-between items-center">
            <img
              src="https://cartlow.com/web-assets/img/alerts/1.svg"
              alt="alert box"
              className="h-[50px] pt-[5px]"
            />
            <div className="mx-[1.5rem]">
              Get
              <span className="font-semibold mx-1">15%</span>
              <span>discount + Free Delivery on orders over</span>
              <span className="font-semibold mx-1">AED 99</span>
            </div>
            <button className="min-w-[170px] px-2 py-[15px] flex rounded border-[2px] border-secondary items-center h-[35px] justify-center font-semibold transition-none hover:bg-secondary hover:text-light hover:outline-none">
              <div className="">
                <span>Use Code: </span>
                <span className="uppercase ">Now 15</span>
              </div>
              <div className="hover:text-light">
                <img
                  src="https://cartlow.com/web-assets/img/icons/icon-copy.svg"
                  alt="box"
                  className="ml-2 hover:text-light"
                />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertBanner;
