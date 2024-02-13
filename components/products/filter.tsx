"use client";
import { Icon } from "@/utils/components/icon";
import filterOptions from "./filterOptions.json";
import icons from "./icons.json";
import { useState } from "react";

// type Filter = {
//   [keyof filterOptions] : {active: boolean}
// }

export default function Filter() {
  const [filter, setFilter] = useState(() => {
    const value = {};
    Object.keys(filterOptions).forEach(key =>
      Object.assign(value, { [key]: { active: false } }),
    );
    return value;
  });

  // useLayoutEffect(() => {}, []);
  console.log(filter);

  return (
    <ul className="">
      {Object.keys(filterOptions).map(key => (
        <li className="mb-5" key={key}>
          <span
            className="flex justify-between items-center text-xl font-semibold border-b-2 w-full"
            onClick={() => {
              setFilter(prev =>
                Object.assign(
                  { ...prev },
                  { [key]: { active: !prev[key].active } },
                ),
              );
            }}
          >
            {key}
            <Icon
              path={icons.filter.path}
              viewBox={icons.filter.viewBox}
              className={[
                "w-4 h-4 origin-center transition-transform duration-500",
                `${filter[key].active ? "rotate-90" : "rotate-0"}`,
              ].join(" ")}
            />
          </span>
          <div
            className={[
              "grid overflow-hidden transition-[gridTemplateRows] duration-500",
              `${
                filter[key].active
                  ? "grid-rows-[repeat(1,auto)]"
                  : "grid-rows-[repeat(1,0)]"
              }`,
            ].join(" ")}
          >
            <div>
              {(
                filterOptions[key] as {
                  [key: keyof typeof filterOptions]: string[];
                }
              ).map((option, i) => {
                return (
                  <label className="block my-2.5" key={i}>
                    <input type="checkbox" value={option} className="" />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
