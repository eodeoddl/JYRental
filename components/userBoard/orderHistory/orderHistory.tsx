"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ItemDetail from "./itemDetail";

import type { HistroyItem } from "@/app/userBoard/@tabItems/orderHistory/page";

export default function OrderHistory({ items }: { items: HistroyItem[] }) {
  const [currentItem, setCurrnetItem] = useState<null | HistroyItem>(null);
  const router = useRouter();
  const buttonAction = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: HistroyItem,
  ) => {
    e.stopPropagation();
    setCurrnetItem(item);
  };

  return (
    <div className="w-10/12 mx-auto space-y-10 mb-20">
      {currentItem ? (
        <ItemDetail item={currentItem} />
      ) : (
        <>
          <h3 className="h3-sm sm:h3-lg">주문내역</h3>
          <div className="grid gird-rows-auto gap-10 divide-y-2">
            {items.map(
              ({ productName, productId, description, imageSrc }, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-3.5 cursor-pointer"
                  onClick={() => router.push("/printer/" + `${productId}`)}
                >
                  <div className="relative flex-none w-auto min-h-36 sm:min-w-36 sm:h-auto">
                    <Image
                      src={imageSrc}
                      alt="product"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="self-center flex flex-col sm:flex-row gap-3.5">
                    <div>
                      <span className="block text-xl font-semibold">
                        {productName}
                      </span>
                      <p className="">{description}</p>
                    </div>
                    <div className="min-w-fit space-y-2.5">
                      <button
                        className="btn-animate before:btn-before before:bg-btn-dark-blue before:hover:btn-before-animate bg-primary-blue text-white"
                        role=""
                      >
                        다시 구매하기
                      </button>
                      <button
                        onClick={e =>
                          buttonAction(e, {
                            productName,
                            productId,
                            description,
                            imageSrc,
                          })
                        }
                        className="btn-animate before:btn-before before:bg-btn-dark-blue before:hover:btn-before-animate bg-white hover:text-white text-primary-blue border border-primary-blue"
                      >
                        주문보기 또는 관리
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
}
