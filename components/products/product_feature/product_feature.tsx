"use client";
import Image from "next/image";
import { useState } from "react";

export default function Product_feature() {
  const [isExpanded, setIsExpanded] = useState(false);
  const style = {
    show: "grid-rows-1",
    hide: "grid-rows-[200px]",
  };

  const handleExpand = () => setIsExpanded(prev => !prev);
  return (
    <div
      className={[
        "grid relative w-10/12 mx-auto bg-black overflow-hidden",
        `${isExpanded ? style.show : style.hide}`,
      ].join(" ")}
    >
      {/* texting componente */}
      <div className="w-full h-[1500px] bg-white">
        <Image
          src="/itemImage.png"
          width={300}
          height={300}
          alt="item"
          className="mx-auto"
        />
      </div>
      <div
        className={[
          "absolute flex justify-center bottom-0 left-0 w-full bg-white mt-3",
          `${
            isExpanded
              ? ""
              : "shadow-[0px_-22px_15px_10px_rgba(255,255,255,0.75)]"
          }`,
        ].join(" ")}
      >
        <button
          className="font-bold w-[200px] mx-auto p-2.5 rounded-lg border bg-black text-white"
          onClick={handleExpand}
        >
          {isExpanded ? "접기" : "펼치기"}
        </button>
      </div>
    </div>
  );
}
