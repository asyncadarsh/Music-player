import React from "react";

function Card({ data, handleClick, index }) {
  const { name, artist, image, added,src} = data;

  return (
  
     <div className="w-60 h-50 bg-zinc-100 p-4 rounded-xl flex flex-col gap-4 relative mt-5 pb-16">
      {/* Image + Details */}
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-sm leading-none font-bold whitespace-nowrap">{name}</h3>
          <h3 className="text-xs">{artist}</h3>
        </div>
      </div>

       {/* Audio Controls */}
      <audio
        src={src}
        controls
        className="absolute left-0 bottom-12 w-60 "
      />

      {/* Add Button */}
      {/* <button
        className={`px-4 py-3 w-full mb-3 whitespace-nowrap ${
          added === false ? "bg-orange-600" : "bg-teal-500"
        } absolute bottom-14 left-1/2 -translate-x-1/2 text-white text-xs rounded-b-full`}
        onClick={() => handleClick(index)}
      >
        {added === false ? "Add to Favourite" : "Added"}
      </button> */}

      <button
        className={`px-4 py-3 w-full whitespace-nowrap ${
          added === false ? "bg-orange-600" : "bg-teal-500"
        } absolute bottom-0   left-0 text-white text-xs rounded-b-xl`}
        onClick={() => handleClick(index)}
      >
        {added === false ? "Add to Favourite" : "Added to Favourite"}
      </button>

     
    </div>
  );
}

export default Card;
