"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({
  children,
  className,
  useScroll,
}: {
  children: React.ReactNode;
  className?: string;
  useScroll?: boolean;
}) {
  const router = useRouter();
  const bodyscroll = useRef(0);

  useEffect(() => {
    if (useScroll) return;
    const body = document.body;
    bodyscroll.current = window.scrollY;
    body.style.cssText = `
        position: fixed;
        top: -${bodyscroll.current}px;
        overflow : hidden;
        width : 100%;
        height: 100%;
        `;

    return () => {
      body.style.cssText = "";
      window.scrollTo(0, bodyscroll.current);
    };
  }, []);

  return (
    <>
      <div
        className={
          className ||
          "w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50"
        }
        onClick={() => router.back()}
      />
      {children}
    </>
  );
}
