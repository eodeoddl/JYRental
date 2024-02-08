import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  useTransitionEndDispatcher,
  useTrigger,
} from "./providers/trasitionProvider";

export default function Portal({
  children,
  containerStyle = "",
  useScroll,
}: {
  children: React.ReactNode;
  containerStyle: string;
  useScroll?: boolean;
}) {
  const transitionDispatcher = useTransitionEndDispatcher();
  const trigger = useTrigger();

  const PortalContainer = (
    <div
      className={
        `${containerStyle} ` +
        `${
          typeof trigger === "string"
            ? "transition-all duration-500 " + trigger
            : ""
        }`
      }
      onTransitionEnd={transitionDispatcher || undefined}
    >
      {children}
    </div>
  );

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

  return typeof window === "object"
    ? createPortal(PortalContainer, document.body)
    : null;
}
