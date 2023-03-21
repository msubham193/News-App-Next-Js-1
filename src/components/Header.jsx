import { fetchEverything } from "@/utils/Requests";
import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="h-20  flex items-center justify-between px-10 font-poppins  ">
      <Search />
      <div className="font-extrabold text-2xl tracking-wider mr-20">
        .News-app
      </div>

      <div className="bg-black text-white p-4 tracking-wider  rounded-3xl text-xs cursor-pointer">
        Subscribe Now
      </div>
    </div>
  );
};


export default Header;
