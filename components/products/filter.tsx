"use client";
import { Icon } from "@/utils/components/icon";
import filterOptions from "./assets/filterOptions.json";
import icons from "./assets/iconsfilter.json";
import useSelectAllNodes from "@/utils/hooks/useSelectAllNodes";
import useAccordian from "@/utils/hooks/useAccordian";

export default function Filter() {
  const { nodes, resisterNode } = useSelectAllNodes();
  const { active, handleAccordian } = useAccordian(nodes);

  return (
    <ul className="">
      {Object.keys(filterOptions).map((key, i) => (
        <li className="mb-5" key={key}>
          <span
            className="flex justify-between items-center text-xl font-semibold border-b-2 w-full"
            onClick={() => handleAccordian(i)}
          >
            {key}
            <Icon
              path={icons.filter.path}
              viewBox={icons.filter.viewBox}
              className={[
                "w-4 h-4 origin-center transition-transform duration-500",
                `${active[i] ? "rotate-90" : "rotate-0"}`,
              ].join(" ")}
            />
          </span>
          <div ref={el => el && resisterNode(i, el)}>
            {filterOptions[key].map((option, i) => {
              return (
                <label className="block my-2.5" key={i}>
                  <input type="checkbox" value={option} className="" />
                  {option}
                </label>
              );
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}
