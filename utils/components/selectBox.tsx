"use client";
import { useEffect, useRef, useState } from "react";
import AccordionSummary from "./accordion/accordionSummary";
import AccrodionDetail from "./accordion/accordionDetail";
import AccordionWrapper, { useAccordion } from "./accordion/accordionProvider";

type Options = { text: string; value?: string }[];
export type DropdownIcon = (isActive?: boolean) => React.ReactElement;
interface SelectBoxProps {
  options: Options;
  className: string;
  activeClassName?: string;
  name?: string;
  initialText: string;
  dropdownIcon: DropdownIcon;
}

function SelectBox({
  options,
  name = "customSelectBox",
  initialText,
  dropdownIcon,
  className = "",
  activeClassName = "",
}: SelectBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isActive, setIsActive] = useAccordion();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        isActive &&
        listRef.current &&
        !listRef.current.contains(e.target as Node)
      )
        setIsActive(false);
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActive]);

  return (
    <div>
      <input type="hidden" name={name} value={inputValue} />
      <AccordionSummary
        className={[className, `${isActive ? activeClassName : ""}`].join(" ")}
        text={inputValue || initialText}
        value={inputValue}
        icon={dropdownIcon}
      />
      <AccrodionDetail>
        <ul ref={listRef} className="shadow-lg rounded-xl w-6/12">
          {options.map(({ text, value }) => (
            <li
              key={text}
              onClick={() => {
                setIsActive(false);
                setInputValue(value || text);
              }}
              className="cursor-pointer my-1.5 p-1"
            >
              {text}
            </li>
          ))}
        </ul>
      </AccrodionDetail>
    </div>
  );
}

function withAccordionContext<T extends SelectBoxProps>(
  Component: React.ComponentType<T>,
) {
  const WithAccordionContextProps = (props: T): JSX.Element => (
    <AccordionWrapper>
      <Component {...props} />
    </AccordionWrapper>
  );

  return WithAccordionContextProps;
}

export default withAccordionContext(SelectBox);
