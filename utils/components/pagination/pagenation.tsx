"use client";
import { MouseEvent, MouseEventHandler, useRef, useState } from "react";
import { Icon } from "../icon";
import icons from "./icons.json";
import { NumbericRange } from "@/types/common";

export default function PageNation({
  totalData,
  pageAmount = 3,
  dataInView,
}: {
  totalData: number;
  pageAmount?: NumbericRange<1, 3>;
  dataInView: number;
}) {
  const [pageIndex, setPageIndex] = useState(0); // totalpage of index
  const [pageGroupIndex, setPageGroupIndex] = useState(0);
  const totalPage = useRef(Math.ceil(totalData / dataInView));
  const totalPageGroup = useRef(Math.ceil(totalPage.current / dataInView));
  const style = useRef({
    "list-hover": "hover:border-2 cursor-pointer",
    "list-style": "flex items-center justify-center rounded-full w-6 h-6 p-1",
  });

  console.log(pageIndex, pageGroupIndex, pageAmount * pageGroupIndex);
  const handleOnClickButton: MouseEventHandler = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    const direction = e.currentTarget.dataset.btn === "prev" ? -1 : 1;
    const nextPage = pageIndex + direction;

    // page index update
    setPageIndex(prev => {
      if (nextPage < 0 || nextPage > totalPage.current - 1) return prev;
      return nextPage;
    });

    // group index update
    if (nextPage > pageAmount - 1 && direction === 1) {
      const lastIndexInPageGroup = pageAmount * (pageGroupIndex + 1) - 1;
      if (lastIndexInPageGroup < nextPage) setPageGroupIndex(prev => prev + 1);
    }

    if (pageGroupIndex > 0 && direction === -1) {
      const firstIndexInPageGroup = pageAmount * pageGroupIndex;
      if (firstIndexInPageGroup > nextPage) setPageGroupIndex(prev => prev - 1);
    }
  };

  const handleOnClickListItem: MouseEventHandler = (
    e: MouseEvent<HTMLLIElement>,
  ) => {
    const index = Number(e.currentTarget.dataset.index);

    if (index === 0) {
      setPageIndex(0);
      setPageGroupIndex(0);
    } else if (index === totalPage.current) {
      setPageIndex(
        pageAmount * totalPageGroup.current +
          (totalPage.current % totalPageGroup.current) -
          1,
      );
      setPageGroupIndex(totalPageGroup.current);
    } else {
      setPageIndex(index);
    }
  };

  return (
    <div className="flex h-6 text-bold leading-4 text-lg">
      {/* Left Button */}
      <button
        data-btn="prev"
        className="group"
        onClick={handleOnClickButton}
        disabled={pageIndex === 0 || undefined}
      >
        <Icon
          path={icons.arrowLeft.path}
          viewBox={icons.arrowLeft.viewBox}
          className="w-5 h-5 fill-black group-disabled:fill-default-gray"
        />
      </button>
      {/* Page Index Group */}
      <ul className="flex gap-1.5 mx-3">
        {/*  */}
        {pageGroupIndex > 0 && (
          <>
            <li
              data-index={0}
              onClick={handleOnClickListItem}
              className={[
                style.current["list-style"],
                style.current["list-hover"],
              ].join(" ")}
            >
              <span>1</span>
            </li>
            <li className={style.current["list-style"]}>...</li>
          </>
        )}
        {/*  */}
        {Array.from({
          length:
            pageGroupIndex === totalPageGroup.current
              ? totalPage.current % totalPageGroup.current
              : pageAmount,
        }).map((_, i) => (
          <li
            key={i}
            data-index={pageAmount * pageGroupIndex + i}
            onClick={handleOnClickListItem}
            className={[
              style.current["list-style"],
              `${
                pageAmount * pageGroupIndex + i === pageIndex
                  ? "bg-btn-light-blue"
                  : style.current["list-hover"]
              }`,
            ].join(" ")}
          >
            {pageAmount * pageGroupIndex + 1 + i}
          </li>
        ))}
        {/*  */}
        {pageGroupIndex < totalPageGroup.current && (
          <>
            <li className={style.current["list-style"]}>...</li>
            <li
              data-index={totalPage.current}
              onClick={handleOnClickListItem}
              className={[
                style.current["list-style"],
                style.current["list-hover"],
              ].join(" ")}
            >
              {totalPage.current}
            </li>
          </>
        )}
      </ul>
      {/* Right Button */}
      <button
        data-btn="next"
        className="group"
        onClick={handleOnClickButton}
        disabled={pageIndex === totalPage.current - 1 || undefined}
      >
        <Icon
          path={icons.arrowRight.path}
          viewBox={icons.arrowRight.viewBox}
          className="w-5 h-5 fill-black group-disabled:fill-default-gray"
        />
      </button>
    </div>
  );
}
