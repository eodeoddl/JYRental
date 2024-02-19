"use client";

import BackButton from "@/utils/components/backButton";
import PreviewItemsWithThumbnail from "./PreviewItemsWithThumbnail";
import type { ProductItem } from "@/app/printer/[productId]/page";
import RentBtn from "../products/buttons/rentBtn";
import PurchaseBtn from "../products/buttons/purchaseBtn";
import AddCartBtn from "../products/buttons/addCartBtn";
import Counter from "./counter";

export default function Product_detail({ data }: { data: ProductItem }) {
  return (
    <div className="p-5">
      <BackButton className="flex mb-5" />
      <section className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="grid grid-cols-[1fr,3fr] grid-rows-[minmax(auto,500px)] gap-5">
            <PreviewItemsWithThumbnail data={data} />
          </div>
          <div className="divide-y [&>*]:my-3">
            <ul className="list-disc list-inside">
              {/* just parts of features */}
              <span>Features</span>
              {data.features.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
            <div>
              <span>Output Speed</span>
              <div className="w-fit border border-primary-blue p-2 my-1.5">
                {data.speed}ppm
              </div>
            </div>
            <div>2 type of price tag</div>
            <div className="grid grid-rows-2 gap-5">
              <div className="flex justify-around items-center">
                <RentBtn />
                <PurchaseBtn />
              </div>
              <div className="flex justify-around items-center">
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
