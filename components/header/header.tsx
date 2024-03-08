"use client";

import { useEffect, useRef, useState } from "react";
import Navigation_desktop from "../navigation/navigation_desktop";
import Navigation_Mobile from "../navigation/navigation_mobile";
import { Icon } from "@/utils/components/icon";
import icons from "./icons.json";
import Image from "next/image";
import Link from "next/link";
import { Viewport } from "@/types/common";
import usePositionContext from "@/utils/hooks/usePosition";
import { usePathname } from "next/navigation";

export default function Header({ viewport }: { viewport: Viewport }) {
  const modalPositionRef = useRef<any>(null);
  const header = useRef<any>(null);
  const dispatcher = usePositionContext();
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!modalPositionRef.current || !header.current) return;

    const ro = new ResizeObserver(() => {
      dispatcher("addDomRect", {
        domName: "accountMenuPosition",
        domRect: modalPositionRef.current.getBoundingClientRect(),
      });
    });
    ro.observe(header.current);

    return () => {
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = header.current.offsetHeight;
      setIsSticky(scrollTop > headerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={header}
        className={[
          "w-full h-[var(--header-height)] grid grid-cols-header sm:grid-cols-header-lg gap-x-2 items-center transition-all duration-500 px-5 lg:px-28",
          `${
            isSticky
              ? "sticky top-0 bg-white/75 z-50"
              : "relative bg-transparent"
          }`,
        ].join(" ")}
      >
        <h1 className="cursor-pointer">
          <Link href="/" className="relative block w-full h-[50px]">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={50}
              // fill
              // style={{ objectFit: "contain" }}
            />
          </Link>
        </h1>
        <Navigation_desktop className="hidden sm:block" />
        <ul className="hidden sm:flex justify-self-end gap-x-1 ">
          {icons.map(({ path, viewBox, search }, i) => (
            <li
              key={i}
              ref={el => {
                if (search === "account") modalPositionRef.current = el;
              }}
            >
              <Link
                href={{ pathname, query: { dialog: search } }}
                scroll={false}
                className="group inline-block rounded-full overflow-hidden"
              >
                <Icon
                  viewBox={viewBox}
                  path={path}
                  className="w-10 h-10 p-1 fill-default-dark-gray bg-transparent group-hover:bg-[#01A0E9]"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Navigation_Mobile className="block sm:hidden justify-self-end" />
      </header>
    </>
  );
}
