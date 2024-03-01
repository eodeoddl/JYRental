"use client";

import useCart, { useLatestItem } from "@/utils/hooks/useCart";
import { useRouter } from "next/navigation";

export default function PurchaseBtn({
  className = "",
  productId,
  purchaseType,
  children,
}: {
  className?: string;
  productId?: number;
  purchaseType: "rent" | "buy";
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useCart();
  return (
    <button
      onClick={() => {
        dispatch("addToCart", {
          productId: productId,
          purchaseType,
        });
        router.push("/cart");
      }}
      className={[
        "btn bg-primary-blue text-white hover:bg-[#006A9B]",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
