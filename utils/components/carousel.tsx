"use client";
import { NumericRange } from "@/types/common";
import React, { useMemo, useReducer, useRef } from "react";

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
  amount,
  data,
}: {
  className?: string;
  amount: NumericRange<1, 3>;
  data: Item[];
}) {
  const itemContainerRepeat = useRef(
    data.length % amount
      ? Math.ceil(data.length / amount)
      : data.length / amount,
  );
  const [slideIndex, dispatch] = useReducer(reducer, 0);

  const containerItem = useMemo(() => {
    return Array.from({ length: itemContainerRepeat.current }, (_, i) => {
      const start = i * amount;
      const end = start + amount;
      return data
        .slice(start, end)
        .map((_, i) => <div key={i}>item index {start + i}</div>);
    });
  }, [data]);

  console.log(containerItem);

  // amount 3 case and data.length = 5
  // [ [item0 , item1 , itme2 ], [item3 , item4] ] => which Items are use as chilren node property

  const dynamicStyle = useMemo(
    () =>
      Array.from({ length: itemContainerRepeat.current }).map((_, i) => ({
        transform: `translateX(-${i * 100}%)`,
      })),
    [],
  );

  return (
    <>
      <div className={["overflow-hidden", className].join(" ")}>
        <div
          className="flex h-full transition-transform duration-500"
          style={dynamicStyle[slideIndex]}
        >
          {[...Array(itemContainerRepeat.current)].map((_, i) => (
            <div
              key={i}
              className={[
                "flex min-w-full min-h-full text-center text-white",
                `${i % 2 ? "bg-slate-400" : "bg-slate-500"}`,
              ].join(" ")}
            >
              {containerItem[i]}
            </div>
          ))}
        </div>
      </div>
      <button
        className=""
        onClick={() =>
          dispatch({
            type: "increase",
            containerRange: itemContainerRepeat.current,
          })
        }
      >
        Increase
      </button>
      <br />
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
