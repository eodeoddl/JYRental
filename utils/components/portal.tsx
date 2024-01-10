import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const transitionCss: { [key: string]: string } = {
  onExit: "min-h-0",
  onEnter: "min-h-full",
};

export default function Portal({
  children,
  containerStyle = "",
  onTransitionEnd,
  trigger,
}: {
  children: React.ReactNode;
  containerStyle: string;
  onTransitionEnd?: () => void;
  trigger?: string;
}) {
  const PortalContainer = (
    <div
      className={
        `${containerStyle} ` +
        `${
          typeof trigger === "string"
            ? "transition-all duration-500 " + transitionCss[trigger]
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
