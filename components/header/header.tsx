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
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollWatcher = useRef<HTMLDivElement>(null);
  const modalPositionRef = useRef<any>(null);
  const header = useRef<any>(null);
  const dispatcher = usePositionContext();
  const pathname = usePathname();

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
    if (!scrollWatcher.current) return;
    const scrollObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsScrolled(!entry.isIntersecting));
    });
    scrollObserver.observe(scrollWatcher.current);
    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={scrollWatcher} />
      <header
        ref={header}
        className={[
          "w-full h-[var(--header-height)] grid grid-cols-header sm:grid-cols-header-lg gap-x-2 items-center transition-all duration-500 px-5 lg:px-28",
          `${
            isScrolled
              ? "fixed top-0 left-0 bg-white/75 z-50"
              : "relative bg-transparent"
          }`,
        ].join(" ")}
      >
        <h1 className="cursor-pointer">
          <Link href="/" className="relative block w-full h-[50px]">
            <Image src="/logo.png" alt="Logo" fill sizes={"100vw"} />
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
