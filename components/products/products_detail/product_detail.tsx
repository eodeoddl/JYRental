"use client";

import BackButton from "@/utils/components/backButton";
import type { ProductItem } from "@/app/printer/[productId]/page";
import RentBtn from "../buttons/rentBtn";
import PurchaseBtn from "../buttons/purchaseBtn";
import AddCartBtn from "../buttons/addCartBtn";
import Counter from "./counter";
import PriceTag from "../../priceTag/priceTag";
import PreviewItemsWithThumbnail from "./previewItemsWithThumbnail";

export default function Product_detail({ data }: { data: ProductItem }) {
  return (
    <div className="p-5">
      <BackButton className="flex mb-5" />
      <section className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="grid grid-cols-[1fr,3fr] grid-rows-[minmax(auto,500px)] gap-5">
            <PreviewItemsWithThumbnail data={data} />
          </div>
          <div className="divide-y [&>*]:py-3">
            <ul className="list-disc list-inside text-default-gray">
              {/* just parts of features */}
              <span>Features</span>
              {data.features.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
            <div>
              <span>Output Speed</span>
              <div className="w-fit border border-primary-blue p-2 my-1.5 rounded-lg">
                {data.speed}ppm
              </div>
            </div>
            <div className="grid grid-cols-2">
              <span className="flex items-center">
                <PriceTag color="orange" className="mr-5" />
                {data.pricePerMonth}원
              </span>
              <span className="flex items-center">
                <PriceTag color="blue" className="mr-5" />
                {data.price}원
              </span>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="flex justify-around items-center">
                <RentBtn />
                <PurchaseBtn />
              </div>
              <div className="flex flex-wrap justify-around items-center gap-5">
                <Counter />
                <AddCartBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
