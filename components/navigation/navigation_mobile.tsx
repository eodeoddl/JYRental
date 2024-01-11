"use client";

import Portal from "@/utils/components/portal";
import TransitionComponent from "@/utils/components/transitionComponent";
import { useState } from "react";
import routes from "./routes.json";
import Link from "next/link";

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
      <TransitionComponent
        render={openModal}
        onExit="h-0"
        onEnter="h-full"
        renderElement={(trigger, onTransitionEnd) => (
          <Portal
            containerStyle="fixed top-[var(--header-height)] left-0 w-full overflow-hidden bg-default-dark-gray/75 "
            trigger={trigger}
            onTransitionEnd={onTransitionEnd}
          >
            <nav>
              <ul className="">
                {routes.data.map(({ displayName, route }) => (
                  <li key={displayName}>
                    <Link href={route}>{displayName}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Portal>
        )}
      />
    </>
  );
}
