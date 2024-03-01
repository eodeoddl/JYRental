"use client";

import useCart, { useCartContext } from "@/utils/hooks/useCart";

export default function Cart() {
  const cart = useCartContext();
  const dispatch = useCart();

  const v = dispatch("getByType", { filterOption: "buy" });
  console.log(cart);

  return <div></div>;
}
