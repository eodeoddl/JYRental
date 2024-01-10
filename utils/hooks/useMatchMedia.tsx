import { BreakPoints, Viewport } from "@/types/common";
import { useEffect, useState } from "react";

export default function useMatchMedia(
  mediaQueryString: BreakPoints[keyof BreakPoints],
  initialViewport?: Viewport,
): boolean {
  const [matches, setMatches] = useState<boolean>(
    initialViewport !== undefined && initialViewport === "desktop",
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return matches;
}
