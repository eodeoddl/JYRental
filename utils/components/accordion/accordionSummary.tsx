import { useAccordion } from "./accordionProvider";
import type { DropdownIcon } from "../selectBox";

export default function AccordionSummary({
  className = "",
  icon,
  text,
}: {
  icon: DropdownIcon;
  text: string;
  className?: string;
}) {
  const [isActive, setIsActive] = useAccordion();
  return (
    <button
      onClick={() => setIsActive(prev => !prev)}
      className={["flex justify-between items-center", className].join(" ")}
    >
      {text}
      {icon(isActive)}
    </button>
  );
}
