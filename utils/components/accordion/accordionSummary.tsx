import { useAccordion } from "./accordionProvider";
import type { DropdownIcon } from "../selectBox";

export default function AccordionSummary({
  className = "",
  icon,
  text,
  value,
}: {
  icon: DropdownIcon;
  text: string;
  className?: string;
  value: string;
}) {
  const [isActive, setIsActive] = useAccordion();
  return (
    <button
      onClick={() => setIsActive(prev => !prev)}
      className={[
        "flex justify-between items-center",
        `${value ? "" : "text-[#9ca3af]"}`,
        className,
      ].join(" ")}
    >
      {text}
      {icon(isActive)}
    </button>
  );
}
