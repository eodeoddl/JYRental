import { Icon } from "@/utils/components/icon";
import icons from "./icons.json";

export default function Product_Menu({ totalData }: { totalData: number }) {
  return (
    <div className="grid grid-cols-[auto,1fr] w-full gap-3">
      <div className="justify-self-start flex items-center">
        <span className="inline-block mr-4 ">{totalData} 품목</span>
        <div className="flex items-center gap-1.5 bg-default-light-blue rounded-md p-1.5">
          <Icon
            path={icons.search.path}
            viewBox={icons.search.viewBox}
            className="fill-default-dark-gray w-6 h-6"
          />
          <input
            type="text"
            placeholder="검색"
            className="bg-transparent outline-none"
          />
        </div>
      </div>
      <select className="justify-self-end">
        <option value="">정렬기준</option>
      </select>
    </div>
  );
}
