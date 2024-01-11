"use client";

import { Viewport } from "@/types/common";
import Navigation_desktop from "../navigation/navigation_desktop";
import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { useEffect, useRef, useState } from "react";
import Navigation_Mobile from "../navigation/navigation_mobile";

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
        className={
          "w-full h-[var(--header-height)] bg-default-gray grid grid-cols-header " +
          `${
            isScrolled ? "fixed top-0 left-0 bg-default-gray/75 " : "relative "
          }`
        }
      >
        <h1 className=" w-[100px] h-[50px]">Logo</h1>
        <div className="sm:order-last">image icons</div>
        {breakPoint_sm ? <Navigation_desktop /> : <Navigation_Mobile />}
      </header>
    </>
  );
}
