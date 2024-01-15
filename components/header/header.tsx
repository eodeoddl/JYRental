"use client";

import { Viewport } from "@/types/common";
import Navigation_desktop from "../navigation/navigation_desktop";
import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { useEffect, useRef, useState } from "react";
import Navigation_Mobile from "../navigation/navigation_mobile";
import icons from "./icons.json";
import { Icon } from "@/utils/components/icon";

export default function Header({ viewport }: { viewport: Viewport }) {
  const breakPoint_sm = useMatchMedia("(min-width : 640px)", viewport);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollWatcher = useRef<HTMLDivElement>(null);

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
          "w-full h-[var(--header-height)]  grid grid-cols-header sm:grid-cols-header-lg gap-x-2 items-center transition-all duration-500 px-5 lg:px-28",
          `${
            isScrolled
              ? "fixed top-0 left-0 bg-default-gray/75"
              : "relative bg-transparent"
          }`,
        ].join(" ")}
      >
        <h1 className="w-[100px] h-[50px] flex items-center justify-center">
          Logo
        </h1>
        {breakPoint_sm ? (
          <Navigation_desktop />
        ) : (
          <Navigation_Mobile className="justify-self-end" />
        )}
        {breakPoint_sm && (
          <ul className="justify-self-end flex gap-x-1 ">
            {icons.map(({ path, viewBox }, i) => (
              <li
                key={i}
                className="group w-8 h-8 rounded-full bg-transparent overflow-hidden cursor-pointer"
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
