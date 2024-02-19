"use client";

import { useRouter } from "next/navigation";

export default function RentBtn({ className = "" }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/cart")}
      className={[
        "btn bg-primary-orange text-white hover:bg-[#CD6511]",
        className,
      ].join(" ")}
    >
      지금 렌트하기
    </button>
  );
}
