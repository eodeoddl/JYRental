import React, { useMemo } from "react";

const tailwindStyles: { [key: string]: string } = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
};

export default React.memo(CarouselItem);

function CarouselItem({ items, amount, itemContainerRepeat }) {
  const containerItem = useMemo(() => {
    return Array.from({ length: itemContainerRepeat }, (_, i) => {
      const start = i * amount;
      const end = start + amount;
      return items.slice(start, end).map((_, i) => (
        <div key={i} className="">
          item index {start + i}
        </div>
      ));
    });
  }, [items, amount]);

  return [...Array(itemContainerRepeat)].map((_, i) => (
    <div
      key={i}
      className={[
        "grid min-w-full min-h-full text-center text-white",
        `${tailwindStyles[String(amount)]}`,
      ].join(" ")}
    >
      {containerItem[i]}
    </div>
  ));
}
