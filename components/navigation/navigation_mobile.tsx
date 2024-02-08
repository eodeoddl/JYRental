"use client";

import Portal from "@/utils/components/portal";
import { useState } from "react";
import routes from "./routes.json";
import Link from "next/link";
import RenderTransitionProvider from "@/utils/components/providers/trasitionProvider";

export default function Navigation_Mobile({
  className,
}: {
  className?: string;
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {/* button  */}
      <button
        className={`btn-burger w-8 h-8 ${className}`}
        onClick={() => setOpenModal(prev => !prev)}
      >
        <span
          className={[
            "top-0",
            `${openModal ? "top-2/4 -translate-y-2/4 -rotate-[315deg]" : ""}`,
          ].join(" ")}
        ></span>
        <span
          className={[
            "top-2/4 -translate-y-2/4",
            `${openModal ? "opacity-0" : ""}`,
          ].join(" ")}
        ></span>
        <span
          className={[
            "bottom-0",
            `${openModal ? "top-2/4 -translate-y-2/4 rotate-[315deg]" : ""}`,
          ].join(" ")}
        ></span>
      </button>
      {/* nav */}
      <RenderTransitionProvider
        render={openModal}
        onExit="h-0"
        onEnter="h-full"
      >
        <Portal containerStyle="fixed top-[var(--header-height)] left-0 w-full overflow-hidden bg-default-dark-gray/75 backdrop-blur-sm">
          <nav>
            <ul className="flex flex-col pt-10">
              {routes.data.map(({ displayName, route }) => (
                <li key={displayName} className="pl-[20%] py-2">
                  <Link href={route}>{displayName}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Portal>
      </RenderTransitionProvider>
    </>
  );
}
