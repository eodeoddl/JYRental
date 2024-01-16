"use client";
import Portal from "@/utils/components/portal";
import { useRouter, useSearchParams } from "next/navigation";

export default function AccountModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    searchParams.get("modal") === "account" && (
      <Portal containerStyle="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 overflow-hidden">
        <div className="p-3.5 text-black bg-white w-[600px] h-[80vh] rounded-2xl">
          Account Modal
          <br />
          <button onClick={() => router.back()}>close</button>
        </div>
      </Portal>
    )
  );
}
