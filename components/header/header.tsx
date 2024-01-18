"use client";

import { Viewport } from "@/types/common";
import { useEffect, useRef, useState } from "react";
import Navigation_desktop from "../navigation/navigation_desktop";
import Navigation_Mobile from "../navigation/navigation_mobile";
import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { Icon } from "@/utils/components/icon";
import icons from "./icons.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ viewport }: { viewport: Viewport }) {
  const breakPoint_sm = useMatchMedia("(min-width : 640px)", viewport);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollWatcher = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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
        className={[
          "w-full h-[var(--header-height)] grid grid-cols-header sm:grid-cols-header-lg gap-x-2 items-center transition-all duration-500 px-5 lg:px-28",
          `${
            isScrolled
              ? "fixed top-0 left-0 bg-default-gray/75 backdrop-blur-sm z-50"
              : "relative bg-transparent"
          }`,
        ].join(" ")}
      >
        <h1 className="cursor-pointer">
          <Link href="/" className="relative block w-full h-[50px]">
            <Image src="/logo.png" alt="Logo" fill />
          </Link>
        </h1>
        {breakPoint_sm ? (
          <Navigation_desktop />
        ) : (
          <Navigation_Mobile className="justify-self-end" />
        )}
        {breakPoint_sm && (
          <ul className="justify-self-end flex gap-x-1 ">
            {icons.map(({ path, viewBox, search }, i) => (
              <li
                key={i}
                className="group w-8 h-8 rounded-full bg-transparent overflow-hidden cursor-pointer"
                onClick={() =>
                  router.push(`${pathname}?modal=${search}`, { scroll: false })
                }
              >
                <Icon
                  viewBox={viewBox}
                  path={path}
                  className="w-full h-full fill-white group-hover:bg-default-dark-gray"
                />
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
