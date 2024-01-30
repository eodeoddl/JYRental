"use client";
import Login from "@/components/user/login/loginForm";
import Portal from "@/utils/components/portal";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AccountModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const closeButtonStyle = useRef(
    "absolute top-2/4 -translate-y-2/4 w-full h-0.5 bg-black rounded",
  );

  // const portalContainer = useRef<HTMLDivElement>();

  // useEffect(() => {
  //   if (portalContainer.current) {
  //     portalContainer.current.addEventListener("click", () => router.back());
  //   }
  // }, []);

  return (
    searchParams.get("modal") === "account" && (
      <Portal containerStyle="fixed top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,0.4)] shadow-2xl z-50">
        <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 p-3.5 text-black bg-white w-11/12 sm:w-5/12 rounded-2xl shadow-2xl">
          <button
            onClick={() => router.back()}
            className="relative cursor-pointer w-5 h-5 float-right"
          >
            <div
              className={[closeButtonStyle.current, "rotate-45"].join(" ")}
            />
            <div
              className={[closeButtonStyle.current, "-rotate-45"].join(" ")}
            />
          </button>
          <Login />
        </div>
      </Portal>
    )
  );
}
