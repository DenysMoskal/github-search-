import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-slate-300 ">
        <h3 className="font-bold">GitHub Search</h3>

        <span className="text-lg">
          <Link className="mr-3 hover:text-gray-200" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-200" to="/favorite">
            Favorite
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Navigation;
