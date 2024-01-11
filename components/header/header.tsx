"use client";

import { Viewport } from "@/types/common";
import Navigation_desktop from "../navigation/navigation_desktop";
import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { useEffect, useRef, useState } from "react";
import Navigation_Mobile from "../navigation/navigation_mobile";
import { BsCart2, BsPerson } from "react-icons/bs";

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
          "w-full h-[var(--header-height)] bg-default-gray grid grid-cols-header sm:grid-cols-header-lg gap-x-2 items-center transition-all duration-500 px-5 lg:px-28",
          `${
            isScrolled ? "fixed top-0 left-0 bg-default-gray/75" : "relative"
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
            {[<BsCart2 />, <BsPerson />].map((svgElement, i) => (
              <li
                key={i}
                className="group overflow-hidden w-8 h-8 p-1 rounded-full bg-default-light-blue"
              >
                {svgElement}
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}

// function Icon = () => ()
// [&_svg]:stroke-default-black
// [&>li]:bg-transparent [&>li]:rounded-full [&>li]:w-8 [&>li]:h-8 [&>li]:p-1 [&_svg]:w-full [&_svg]:h-full
