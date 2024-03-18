import type { ItemType } from "@/app/userBoard/@tabItems/savedItem/page";
import PriceTag from "@/components/priceTag/priceTag";
import icons from "./assets/icons.json";
import Image from "next/image";
import { Icon } from "@/utils/components/icon";

export default function SavedItem({ items }: { items: ItemType[] }) {
  const closeBtnStyle =
    "absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 w-9/12 h-0.5 bg-black rounded";

  return (
    <div className="w-8/12 mx-auto my-10">
      <div className="overflow-x-auto">
        <div className="flex flex-row gap-3.5">
          {items.map(
            (
              { productName, productDetail, price, description, imageSrc },
              i,
            ) => (
              <div
                key={i}
                className="relative grid grid-auto-row min-w-[80%] sm:min-w-[55%] md:min-w-[35%] my-10 gap-3 shadow-xl rounded-xl p-2"
              >
                <Image
                  src={imageSrc}
                  alt="item"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                <span className="inline-block text-xl font-bold">
                  {productName}
                </span>
                <span className="inline-block text-default-gray">
                  {productDetail}
                </span>
                <p>{description}</p>
                <div>
                  <PriceTag color="blue" className="inline-block mr-3.5" />
                  <span>{price}</span>
                </div>
                <button className="btn text-white bg-primary-blue w-fit hover:bg-btn-dark-blue">
                  <Icon
                    path={icons.cartBtn.path}
                    viewBox={icons.cartBtn.viewBox}
                    className="w-5 h-5 fill-white mr-1.5"
                  />
                  장바구니에 추가하기
                </button>
                <button className="absolute w-5 h-5 right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full shadow-md">
                  <div className={[closeBtnStyle, "rotate-45"].join(" ")} />
                  <div className={[closeBtnStyle, "-rotate-45"].join(" ")} />
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
