import { Icon } from "@/utils/components/icon";
import icons from "./icons.json";

// type Color = "fill-primary-orange" | "fill-primary-blue";

type Color = "orange" | "blue";

export default function PriceTag({
  color,
  className = "",
}: {
  color: Color;
  className?: string;
}) {
  const style = { orange: "fill-primary-orange", blue: "fill-primary-blue" };
  return (
    <Icon
      path={icons.priceTag.path}
      viewBox={icons.priceTag.viewBox}
      className={["w-[20px] h-[19px]", style[color], className].join(" ")}
    />
  );
}
