"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Dialog({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const show = searchParams.get("dialog") === type;

  useEffect(() => {
    if (show) dialogRef.current?.show();
  }, [show]);

  return show ? <dialog ref={dialogRef}>{children}</dialog> : null;
}
