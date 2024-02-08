"use client";
import { usePathname, useRouter } from "next/navigation";

export default function CloseButton({
  width = "w-5",
  height = "h-5",
}: {
  width?: string;
  height?: string;
}) {
  const closeButtonStyle =
    "absolute top-2/4 -translate-y-2/4 w-full h-0.5 bg-black rounded";
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      onClick={() => router.push(pathname)}
      className={[
        "relative cursor-pointer float-right",
        `${width}`,
        `${height}`,
      ].join(" ")}
    >
      <div className={[closeButtonStyle, "rotate-45"].join(" ")} />
      <div className={[closeButtonStyle, "-rotate-45"].join(" ")} />
    </button>
  );
}
