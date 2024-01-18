import { BreakPoints, Viewport } from "@/types/common";
import { useEffect, useState } from "react";

export default function useMatchMedia(
  mediaQueryString: BreakPoints[keyof BreakPoints],
  initialViewport?: Viewport,
) {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(mediaQueryString).matches,
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
