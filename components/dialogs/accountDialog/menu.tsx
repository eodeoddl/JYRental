"use client";
import usePositionContext from "@/utils/hooks/usePosition";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CloseButton from "../dialogCloseBtn";

export default function MenuDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatcher = usePositionContext();
  const [positionLeft, setPositionLeft] = useState("");
  const [positionTop, setPositionTop] = useState("");

  useEffect(() => {
    const position = dispatcher("getDomRect", {
      domName: "accountMenuPosition",
    });
    if (!position) return;
    const { right, bottom } = position;
    setPositionLeft(Math.floor(right) + "px");
    setPositionTop(Math.floor(bottom) + "px");
  }, []);

  useEffect(() => {
    const resizeCallback = () => router.push(pathname);
    window.addEventListener("resize", resizeCallback);
    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return (
    <div
      className="w-36 fixed z-50 -translate-x-full bg-white p-3 rounded-lg shadow-lg"
      style={{ left: positionLeft, top: positionTop }}
    >
      <CloseButton width="w-3" height="h-3" />
      <menu className="text-default-dark-gray font-medium space-y-4 nth-[n]:cursor-pointer clear-both">
        <li onClick={() => router.push("/userBoard")}>계정</li>
        <li>내 주문 추적</li>
        <li>로그아웃</li>
      </menu>
    </div>
  );
}
