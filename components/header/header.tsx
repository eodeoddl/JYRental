"use client";

import { useEffect, useRef, useState } from "react";
import Navigation_desktop from "../navigation/navigation_desktop";

export default function Header({ viewport }: { viewport: string | null }) {
  console.log("header client component", viewport);
  // resizeable 테스트 후 Hooks로 따로 관리할 예정
  const resizeable = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(viewport === "mobile");

  useEffect(() => {
    const Element = resizeable.current;
    const breakPoint = 430;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { inlineSize } = entry.borderBoxSize[0];
      setIsMobile(inlineSize < breakPoint);
    });
    Element && resizeObserver.observe(Element);

    return () => {
      Element && resizeObserver.unobserve(Element);
    };
  }, []);

  return (
    <header ref={resizeable} className="w-full">
      some other static content,,,
      {isMobile ? " Mobile Header children " : <Navigation_desktop />}
    </header>
  );
}
