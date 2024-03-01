"use client";

import useCart from "@/utils/hooks/useCart";
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";

export default function Counter({ productId }: { productId: number }) {
  const counterBtnStyle = "relative w-3 justify-self-center p-0.5";
  const counterBtnChildStyle =
    "w-full h-[2.2px] bg-black rounded-sm absolute left-0 top-2/4 -translate-y-2/4";
  const [quantity, setQuantity] = useState(1);
  const dispatch = useCart();

  const handleClickCounter: MouseEventHandler = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    const direction = e.currentTarget.dataset.type === "decrease" ? -1 : 1;
    setQuantity(prev => (prev + direction > 1 ? prev + direction : 1));
  };

  useEffect(() => {
    if (quantity < 2) return;

    dispatch("setQuantity", {
      productId,
      quantity,
    });
  }, [quantity]);

  return (
    <div className="flex items-center gap-3">
      <span className="font-bold min-w-fit">수량 선택 : </span>
      <div className="grid grid-cols-[0.5fr,1fr,0.5fr] min-w-20 rounded-2xl bg-[#eee] overflow-hidden p-0.5">
        <button
          data-type="decrease"
          className={counterBtnStyle}
          onClick={handleClickCounter}
        >
          <div className={counterBtnChildStyle} />
        </button>
        <span className="justify-self-center">{quantity}</span>
        <button
          data-type="increase"
          className={counterBtnStyle}
          onClick={handleClickCounter}
        >
          <div className={counterBtnChildStyle} />
          <div className={[counterBtnChildStyle, "rotate-90"].join(" ")} />
        </button>
      </div>
    </div>
  );
}
