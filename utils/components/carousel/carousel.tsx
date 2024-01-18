"use client";
import { NumericRange, Viewport } from "@/types/common";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import CarouselItem from "./carouselItem";
import useMatchMedia from "@/utils/hooks/useMatchMedia";

type Item = {};
type ReducerAction = { type: "increase" | "decrease"; containerRange?: number };

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
  }
  return nextState;
};

export default function Carousel({
  className = "",
  data,
  viewport,
}: {
  className?: string;
  data: Item[];
  viewport: Viewport;
}) {
  const [slideIndex, dispatch] = useReducer(reducer, 0);
  const breakPoint_md = useMatchMedia("(min-width : 640px)", viewport);
  const breakPoint_lg = useMatchMedia("(min-width : 1024px)", viewport);
  console.log(breakPoint_lg, breakPoint_md);

  const [amount, setAmount] = useState<NumericRange<1, 3>>(1);
  // console.log(window.visualViewport.width);

  const itemContainerRepeat =
    data.length % amount
      ? Math.ceil(data.length / amount)
      : data.length / amount;

  const dynamicStyle = useMemo(
    () =>
      Array.from({ length: itemContainerRepeat }).map((_, i) => ({
        transform: `translateX(-${i * 100}%)`,
      })),
    [itemContainerRepeat],
  );

  useEffect(() => {
    console.log("useEffect");
    if (!breakPoint_md) setAmount(1);
    else if (breakPoint_md && !breakPoint_lg) setAmount(2);
    else setAmount(3);

    // console.log(amount);
  }, [breakPoint_md, breakPoint_lg]);

  return (
    <>
      <div className={["overflow-hidden border", className].join(" ")}>
        <div
          className="flex h-full transition-transform duration-500"
          style={dynamicStyle[slideIndex]}
        >
          <CarouselItem
            items={data}
            amount={amount}
            itemContainerRepeat={itemContainerRepeat}
          />
        </div>
      </div>
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "increase",
            containerRange: itemContainerRepeat,
          })
        }
      >
        Increase
      </button>
      <br />
      <br />
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "decrease",
          })
        }
      >
        Decrease
      </button>
    </>
  );
}

// moblie response touch screen,
// blocking list item tab
