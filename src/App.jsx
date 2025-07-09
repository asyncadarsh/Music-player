import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
 const data = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    name: "Lost Stars",
    artist: "Arjun",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    name: "Midnight City",
    artist: "Priya",
    added: false,
    src:"/songs/s2.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    name: "Electric Heart",
    artist: "Rohan",
    added: false,
    src:"/songs/s3.mp3"
  },
  {
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    name: "Neon Lights",
    artist: "Meera",
    added: false,
    src:"/songs/s4.mp3"
  },
  {
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    name: "Golden Days",
    artist: "Kunal",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    name: "Skyline",
    artist: "Isha",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    name: "Parallel Universe",
    artist: "Vikram",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Echoes ",
    artist: "Simran",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    name: "Sunset Drive",
    artist: "Kabir",
    added: false,
    src:"/songs/s1.m4a"
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Moonlight",
    artist: "Aanya",
    added: false,
    src:"/songs/s1.m4a"
  },
  
];

const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <Navbar data={songData} />
        <div className="px-20 flex flex-wrap gap-10 mt-10">
          {songData.map((obj, index) => (
            <Card
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
