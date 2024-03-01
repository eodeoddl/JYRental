import { useEffect, useRef } from "react";
import { useAccordion } from "./accordionProvider";

export default function AccrodionDetail({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive] = useAccordion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = isActive
        ? `${ref.current.scrollHeight}px`
        : "0px";
    }
  }, [isActive]);

  return (
    <div
      ref={ref}
      className={[
        "overflow-hidden max-h-0 transition-[max-height] duration-150 ease-in-out",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
