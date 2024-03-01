"use client";

import { TypedQnas } from "./type/types";
import { Icon } from "@/utils/components/icon";
import icons from "./assets/iconsqna.json";
import AccordionWrapper from "@/utils/components/accordion/accordionProvider";
import AccordionSummary from "@/utils/components/accordion/accordionSummary";
import AccrodionDetail from "@/utils/components/accordion/accordionDetail";

export default function Qna() {
  return (
    <ul>
      {Object.keys(TypedQnas).map((question, i) => (
        <li key={i} className="w-9/12 mx-auto">
          <AccordionWrapper>
            <AccordionSummary
              className="w-full border-b-2 p-1 my-3 text-xl font-bold"
              text={question}
              icon={() => (
                <Icon
                  path={icons.plusIcon.path}
                  viewBox={icons.plusIcon.viewBox}
                  className="w-4 h-4"
                />
              )}
            />
            <AccrodionDetail>
              <div>{TypedQnas[question]}</div>
            </AccrodionDetail>
          </AccordionWrapper>
        </li>
      ))}
    </ul>
  );
}
