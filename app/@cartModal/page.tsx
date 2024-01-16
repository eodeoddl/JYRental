"use client";
import Portal from "@/utils/components/portal";
import RenderTransitionProvider from "@/utils/components/trasitionProvider";
import { useRouter, useSearchParams } from "next/navigation";

export default function CartModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <RenderTransitionProvider
      render={searchParams.get("modal") === "cart"}
      onEnter="opacity-100 translate-y-0"
      onExit="opacity-0 -translate-y-full"
    >
      <Portal
        containerStyle="fixed top-[10%] right-[10%] w-[300px] lg:w-[500px] h-[80vh] overflow-hidden rounded-2xl"
        useScroll
      >
        <div className="relative w-full h-full bg-white text-black p-3.5">
          Cart popup
          <br />
          <button onClick={() => router.back()}>close</button>
        </div>
      </Portal>
    </RenderTransitionProvider>
  );
}
