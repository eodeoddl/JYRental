"use client";
import { MouseEvent, MouseEventHandler, useRef } from "react";
import { Icon } from "../icon";
import icons from "./icons.json";
import { NumbericRange } from "@/types/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PageNation({
  totalData,
  pageAmount = 3,
  dataInView,
}: {
  totalData: number;
  pageAmount?: NumbericRange<1, 3>;
  dataInView: number;
}) {
  const totalPage = useRef(Math.ceil(totalData / dataInView));
  const totalPageGroup = useRef(Math.ceil(totalPage.current / dataInView));
  const style = useRef({
    "list-hover": "hover:border-2 cursor-pointer",
    "list-style":
      "flex items-center justify-center rounded-full w-8 h-8 p-2 rounded-full text-center",
  });
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPageIndex = Number(searchParams.get("pageIndex")) || 0;
  const currentPageGroupIndex = Number(searchParams.get("pageGroupIndex")) || 0;

  const generatePageURL = (pageIndex: number, pageGroupIndex: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageIndex", pageIndex.toString());
    params.set("pageGroupIndex", pageGroupIndex.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleOnClickButton: MouseEventHandler = (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    const direction = e.currentTarget.dataset.btn === "prev" ? -1 : 1;
    const nextPage = currentPageIndex + direction;
    const lastIndexInPageGroup = pageAmount * (currentPageGroupIndex + 1) - 1;
    const firstIndexInPageGroup = pageAmount * currentPageGroupIndex;

    const pageIndex =
      nextPage < 0 || nextPage > totalPage.current - 1
        ? currentPageIndex
        : nextPage;

    const pageGroupIndex = (() => {
      if (
        nextPage > pageAmount - 1 &&
        direction === 1 &&
        lastIndexInPageGroup < nextPage
      )
        return currentPageGroupIndex + 1;
      else if (
        currentPageGroupIndex > 0 &&
        direction === -1 &&
        firstIndexInPageGroup > nextPage
      )
        return currentPageGroupIndex - 1;
      else return currentPageGroupIndex;
    })();

    router.push(generatePageURL(pageIndex, pageGroupIndex));
  };

  const handleOnClickListItem: MouseEventHandler = (
    e: MouseEvent<HTMLLIElement>,
  ) => {
    const index = Number(e.currentTarget.dataset.index);

    if (index === 0) {
      router.push(generatePageURL(0, 0));
    } else if (index === totalPage.current) {
      router.push(
        generatePageURL(
          pageAmount * totalPageGroup.current +
            (totalPage.current % totalPageGroup.current) -
            1,
          totalPageGroup.current,
        ),
      );
    } else {
      router.push(generatePageURL(index, currentPageGroupIndex));
    }
  };

  return (
    <div className="flex items-center text-bold leading-4 text-lg">
      {/* Left Button */}
      <button
        data-btn="prev"
        className="group"
        onClick={handleOnClickButton}
        disabled={currentPageIndex === 0 || undefined}
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
        {currentPageGroupIndex > 0 && (
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
            currentPageGroupIndex === totalPageGroup.current
              ? totalPage.current % totalPageGroup.current
              : pageAmount,
        }).map((_, i) => (
          <li
            key={i}
            data-index={pageAmount * currentPageGroupIndex + i}
            onClick={handleOnClickListItem}
            className={[
              style.current["list-style"],
              `${
                pageAmount * currentPageGroupIndex + i === currentPageIndex
                  ? "bg-btn-light-blue"
                  : style.current["list-hover"]
              }`,
            ].join(" ")}
          >
            <span className="inline-block ">
              {pageAmount * currentPageGroupIndex + 1 + i}
            </span>
          </li>
        ))}
        {/*  */}
        {currentPageGroupIndex < totalPageGroup.current && (
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
              <span className="inline-block">{totalPage.current}</span>
            </li>
          </>
        )}
      </ul>
      {/* Right Button */}
      <button
        data-btn="next"
        className="group"
        onClick={handleOnClickButton}
        disabled={currentPageIndex === totalPage.current - 1 || undefined}
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
