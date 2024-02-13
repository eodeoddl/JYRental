"use client";
import Image from "next/image";
import icons from "./icons.json";
import { Icon } from "@/utils/components/icon";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Items = {
  productId: number;
  productName: string;
  src: string;
  discription: string;
  price: number;
  rentPrice: number;
}[];

export default function Products({ items }: { items: Items }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <ul className="w-full">
        {items.map(
          (
            { productName, discription, src, price, rentPrice, productId },
            i,
          ) => (
            <li key={i} className="border-b-2 py-5">
              <Link
                href={`${pathname}/${productId}`}
                className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 mb-5"
              >
                <div className="relative text-center">
                  <Image
                    src={src}
                    alt={productName}
                    width={200}
                    height={200}
                    style={{ margin: "0 auto" }}
                  />
                  <span className="inline-block text-xl font-bold">
                    {productName}
                  </span>
                </div>
                <div className="flex gap-3">
                  <p className="hidden sm:block">{discription}</p>
                  <div className="mx-auto">
                    <span className="sm:block min-w-max mb-4 mx-2">
                      <Icon
                        path={icons["priceTag"].path}
                        viewBox={icons["priceTag"].viewBox}
                        className="fill-primary-orange w-5 h-5 inline-block mr-2"
                      />
                      {price}원
                    </span>
                    <span className="sm:block min-w-max mx-2">
                      <Icon
                        path={icons["priceTag"].path}
                        viewBox={icons["priceTag"].viewBox}
                        className="fill-primary-blue w-5 h-5 inline-block mr-2"
                      />
                      {rentPrice}원
                    </span>
                  </div>
                </div>
              </Link>
              <div className="flex gap-4 mx-auto sm:mx-0 sm:ml-auto w-fit">
                <button className="hidden sm:block btn bg-primary-blue text-white hover:bg-[#006A9B]">
                  지금 구매하기
                </button>
                <button className="hidden sm:block btn bg-primary-orange text-white hover:bg-[#CD6511]">
                  지금 렌트하기
                </button>
                <button className="btn border border-primary-blue hover:bg-[#006A9B] hover:text-white">
                  장바구니에 추가하기
                </button>
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  );
}
