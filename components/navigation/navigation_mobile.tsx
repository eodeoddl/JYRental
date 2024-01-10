"use client";

import Portal from "@/utils/components/portal";
import TransitionComponent from "@/utils/components/transitionComponent";
import { useState } from "react";

const routes = [
  { displayName: "홈", route: "/" },
  { displayName: "제품", route: "/products" },
  { displayName: "서비스", route: "/service" },
];

export default function Navigation_Mobile(
  {
    // topPosition,
  }: {
    // topPosition: null | number;
  },
) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(prev => !prev)}>burger button</button>
      <TransitionComponent
        render={openModal}
        renderElement={(trigger, onTransitionEnd) => (
          <Portal
            containerStyle="absolute top-[var(--header-height)] left-0 w-full bg-default-dark-gray"
            trigger={trigger}
            onTransitionEnd={onTransitionEnd}
          >
            <div className="">render portal component with chilren</div>
          </Portal>
        )}
      />
    </>
  );
}
