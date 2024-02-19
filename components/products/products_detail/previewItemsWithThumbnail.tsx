"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductItem } from "@/app/printer/[productId]/page";

export default function PreviewItemsWithThumbnail({
  data,
}: {
  data: ProductItem;
}) {
  const [tumbnailIndex, setTumbnailIndex] = useState(0);
  const onMounseEnter = (index: number) => setTumbnailIndex(index);

  return (
    <>
      <div className="flex flex-col gap-3">
        {data.imagesSrc.map((src, i) => (
          <div
            key={i}
            className={[
              "relative w-full h-[100px] rounded-md",
              `${i === tumbnailIndex ? "border border-black" : ""}`,
            ].join(" ")}
          >
            <Image
              alt="product"
              key={i}
              src={src}
              fill
              style={{ objectFit: "contain" }}
              onMouseEnter={() => onMounseEnter(i)}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="relative w-full h-3/4">
          <Image
            alt="thumbnail"
            src={data.imagesSrc[tumbnailIndex]}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className="text-lg font-semibold">{data.title}</span>
        <br />
        <span className="text-default-gray">{data.productId}</span>
      </div>
    </>
  );
}
