import { Icon } from "@/utils/components/icon";
import filterOption from "./filterOptions.json";

const icons = require("./icons.json");
// type IconType = typeof icons;
// type IconType = "filter_m1" | "filter_m2";
// type IconsSet<T extends object> = { [K in "filter_m1" | "filter_m2"]:  typeof T[K] };

// type I22<T> = { [K keyof T] : }
// type Subset<T> = {
//   [K in keyof T]?: T[K];
// };

export default function M_Filter() {
  return (
    <>
      <div className="flex">
        <Icon
          path={icons.filter_m1.path}
          viewBox={icons.filter_m1.viewBox}
          className="w-5 h-5"
        />
        <select>
          <option value="">필터</option>
          {}
        </select>
      </div>
      <div className="flex">
        <Icon
          path={icons.filter_m2.path}
          viewBox={icons.filter_m2.viewBox}
          className="w-5 h-5"
        />
        <select>
          <option value="">정렬기준</option>
        </select>
      </div>
    </>
  );
}
