"use client";
import { Icon } from "@/utils/components/icon";
import { TypedFilterOptions } from "./type/types";
import icons from "./assets/iconsfilter.json";
import AccordionWrapper from "@/utils/components/accordion/accordionProvider";
import AccordionSummary from "@/utils/components/accordion/accordionSummary";
import AccrodionDetail from "@/utils/components/accordion/accordionDetail";

export default function Filter() {
  return (
    <ul>
      {Object.keys(TypedFilterOptions).map((text, i) => (
        <li className="mb-5" key={i}>
          <AccordionWrapper>
            <AccordionSummary
              className="flex justify-between items-center text-xl font-semibold border-b-2 w-full"
              text={text}
              icon={isActive => (
                <Icon
                  path={icons.filter.path}
                  viewBox={icons.filter.viewBox}
                  className={[
                    "w-4 h-4 origin-center transition-transform duration-500",
                    `${isActive ? "rotate-90" : "rotate-0"}`,
                  ].join(" ")}
                />
              )}
            />
            <AccrodionDetail>
              {TypedFilterOptions[text].map((option, i) => (
                <label className="block my-2.5" key={i}>
                  <input type="checkbox" value={option} />
                  {option}
                </label>
              ))}
            </AccrodionDetail>
          </AccordionWrapper>
        </li>
      ))}
    </ul>
  );
}
