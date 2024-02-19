import { Icon } from "@/utils/components/icon";
import icons from "./assets/iconsfilter.json";

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
