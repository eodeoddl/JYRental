"use client";

import Portal from "@/utils/components/portal";
import TransitionComponent from "@/utils/components/transitionComponent";
import { useState } from "react";
import routes from "./routes.json";
import Link from "next/link";

export default function Navigation_Mobile() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(prev => !prev)}>burger button</button>
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
