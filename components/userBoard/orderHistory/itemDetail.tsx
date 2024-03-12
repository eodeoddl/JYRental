"use client";
import Image from "next/image";
import type { HistroyItem } from "./orderHistory";

export default function ItemDetail({ item }: { item: HistroyItem }) {
  const btnStyle = {
    default:
      "btn-animate before:btn-before before:hover:btn-before-animate rounded-2xl w-full",
    type_1:
      "bg-primary-blue text-white hover:text-black before:hover:bg-default-gray",
    type_2:
      "border border-primary-blue text-primary-blue hover:border-transparent hover:text-white before:hover:bg-primary-blue",
  };

  return (
    <div className="w-full">
      <span className="inline-block text-xl font-bold border-b-2 w-full mb-5">
        View Order
      </span>
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,max-content] gap-3">
        <div className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] justify-self-center">
          <Image
            src="/itemImage.png"
            alt="item"
            fill
            className="bg-default-gray rounded-2xl"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="inline-block border-b-2 w-full font-bold">
            product name
          </span>
          <span>{item.productName}</span>
          <span className="inline-block border-b-2 w-full font-bold">
            product detail
          </span>
          <p className="h-full border-b-2">{item.description}</p>
        </div>
        <div className="space-y-3">
          <button className={[btnStyle.default, btnStyle.type_1].join(" ")}>
            피드백 남기기
          </button>
          <button className={[btnStyle.default, btnStyle.type_2].join(" ")}>
            반품하기
          </button>
          <button className={[btnStyle.default, btnStyle.type_2].join(" ")}>
            연락 및 지원
          </button>
          <button className={[btnStyle.default, btnStyle.type_2].join(" ")}>
            피드백 남기기
          </button>
        </div>
      </div>
    </div>
  );
}
