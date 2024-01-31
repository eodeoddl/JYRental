"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Item } from "./tabGroup";

export default function Tab({ path, item }: { path: string; item: Item }) {
  const pathname = usePathname();
  const href = item.slug ? path + "/" + item.slug : path;
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={[
        "ilnine-block p-3 w-fit",
        `${
          isActive
            ? "text-black underline underline-offset-8"
            : "text-default-gray"
        }`,
      ].join(" ")}
    >
      {item.text}
    </Link>
  );
}
