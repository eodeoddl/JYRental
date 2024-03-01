"use client";

import useCart from "@/utils/hooks/useCart";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RentBtn({
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
      onClick={() => dispatch("addToCart", { productId })}
      className={[
        "btn bg-primary-orange text-white hover:bg-[#CD6511]",
        className,
      ].join(" ")}
    >
      <Link href={{ pathname, query: { dialog: "rent", productId } }}>
        지금 렌트하기
      </Link>
    </button>
  );
}
