import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Portal({
  children,
  containerStyle = "",
  onTransitionEnd,
  trigger,
  backgroundScroll,
}: {
  children: React.ReactNode;
  containerStyle: string;
  onTransitionEnd?: () => void;
  trigger?: string;
  backgroundScroll?: boolean;
}) {
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
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  );

  const bodyscroll = useRef(0);
  useEffect(() => {
    if (backgroundScroll) return;
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

  return createPortal(PortalContainer, document.body);
}
