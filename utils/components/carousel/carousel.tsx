"use client";

import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { useEffect, useReducer, useRef, useState } from "react";
import icons from "./icons.json";
import { Icon } from "../icon";
import Image from "next/image";

type Item = {};
type ReducerAction = {
  type: "increase" | "decrease" | "init";
  containerRange?: number;
};

const reducer = (state: number, action: ReducerAction) => {
  let nextState = state;
  switch (action.type) {
    case "increase":
      if (action.containerRange && state < action.containerRange - 1)
        nextState = state + 1;
      break;
    case "decrease":
      if (state > 0) nextState = state - 1;
      break;
    case "init":
      nextState = 0;
      break;
  }
  return nextState;
};

export default function Carousel({
  className = "",
  data,
}: {
  className?: string;
  data: Item[];
}) {
  const slider = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const breakPoint_sm = useMatchMedia("(min-width : 640px)");
  const [style, setStyle] = useState<{ transform: string }[]>([]);
  const [cssIndex, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    const moveAmount = breakPoint_sm ? 33 : 100;
    const css = Array.from({
      length: breakPoint_sm ? Math.ceil(data.length / 3) : data.length,
    }).map((_, i) => ({ transform: `translateX(-${i * moveAmount}%)` }));
    setStyle(css);
    dispatch({ type: "init" });
  }, [data, breakPoint_sm]);

  return (
    <>
      <div ref={slider} className={["relative", className].join(" ")}>
        <div className="overflow-hidden">
          <div
            ref={container}
            className={[
              "flex text-center transition-transform duration-500",
            ].join(" ")}
            style={style[cssIndex]}
          >
            {data.map((_, i) => (
              <a
                key={i}
                className="min-w-full sm:min-w-[33.33333%] h-[40vh] p-2.5 grid grid-rows-[1fr_auto_auto] gap-1.5 cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src="/itemImage.png"
                    alt="item"
                    fill
                    // sizes={"(min-width: 640px): 33vw, 100vw"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="h5-sm sm:h5-lg">Item Index {i}</h3>
                <p className="truncate paragraph-md">Some other Text...</p>
                <span className="flex justify-center items-center gap-1.5">
                  <Icon
                    path={icons.priceTag.path}
                    viewBox={icons.priceTag.viewBox}
                    className="fill-[#01A0E9] w-[20px] h-[19px]"
                  />
                  1000원
                </span>
              </a>
            ))}
          </div>
        </div>
        <button
          className="group absolute right-0 top-1/2 -translate-y-2/4 sm:translate-x-full translate-x-2/4 p-2.5"
          disabled={cssIndex === style.length - 1 || undefined}
          onClick={() =>
            dispatch({ type: "increase", containerRange: style.length })
          }
        >
          <Icon
            path={icons.nextBtn.path}
            viewBox={icons.nextBtn.viewBox}
            className="fill-black w-11 group-disabled:fill-btn-gray"
          />
        </button>
        <button
          className={[
            "group absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 sm:-translate-x-full p-2.5 ",
          ].join(" ")}
          disabled={cssIndex === 0 || undefined}
          onClick={() => dispatch({ type: "decrease" })}
        >
          <Icon
            path={icons.prevBtn.path}
            viewBox={icons.prevBtn.viewBox}
            className="fill-black w-11 group-disabled:fill-btn-gray"
          />
        </button>
      </div>
    </>
  );
}
