import React from "react";

function Navbar({ data }) {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center">
      <h1 className="text-[30px] text-bold bg-green-100 rounded-xl px-2 py-1">Adarsh Music Player </h1>
      <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md font-sm gap-3">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.added).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
