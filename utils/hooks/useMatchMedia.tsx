import { BreakPoints } from "@/types/common";
import { useEffect, useState } from "react";

export default function useMatchMedia(
  mediaQueryString: BreakPoints[keyof BreakPoints],
  intialMathes?: boolean,
) {
  const [matches, setMatches] = useState<boolean | null>(intialMathes || null);

  useEffect(() => {
    setMatches(window.matchMedia(mediaQueryString).matches);

    const mediaQueryList = window.matchMedia(mediaQueryString);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return matches;
}
