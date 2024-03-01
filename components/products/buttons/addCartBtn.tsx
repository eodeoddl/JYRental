"use client";

import useCart from "@/utils/hooks/useCart";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AddCartBtn({
  className = "",
  productId,
}: {
  className?: string;
  productId: number;
}) {
  const pathname = usePathname();
  const dispatch = useCart();
  return (
    <button
      onClick={() => {
        dispatch("addToCart", { productId });
      }}
      className={[
        "btn border border-primary-blue hover:bg-[#006A9B] hover:text-white",
        className,
      ].join(" ")}
    >
      <Link href={{ pathname, query: { dialog: "addCart" } }}>
        장바구니에 추가하기
      </Link>
    </button>
  );
}
