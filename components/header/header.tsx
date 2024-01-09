"use client";

import Navigation_desktop from "../navigation/navigation_desktop";
import useMatchMedia from "@/utils/hooks/useMatchMedia";
import { Viewport } from "@/utils/types/type";
import { useState } from "react";

export default function Header({ viewport }: { viewport: Viewport }) {
  const breakPoint_sm = useMatchMedia("(min-width : 640px)", viewport);
  const [popup, setPopup] = useState(false);

  return (
    <header className="w-full">
      some other static content,,,
      {breakPoint_sm ? <Navigation_desktop /> : " mobile Header children "}
      <button onClick={() => setPopup(true)}>open modal</button>
    </header>
  );
}
