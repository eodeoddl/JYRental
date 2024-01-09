"use client";

import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { Viewport } from "@/utils/types/type";

const routes = [
  { displayName: "홈", route: "/" },
  { displayName: "제품", route: "/products" },
  { displayName: "서비스", route: "/service" },
];

export default function Navigation_Mobile({
  viewport,
}: {
  viewport: Viewport;
}) {
  const breakPoint_sm = useMatchMedia("(min-width : 640px)", viewport);
  return (
    !breakPoint_sm && (
      <nav className="fixed left-0 bottom-0">Mobile Navigation</nav>
    )
  );
}
