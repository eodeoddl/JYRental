// import { Icons_Header } from "@IconTypes/header";
import { CSSProperties } from "react";

type IconProps = {
  path: string;
  className?: string;
  style?: CSSProperties;
  viewBox: string;
};

export function Icon({ path, viewBox, className, style }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      viewBox={viewBox}
    >
      <path d={path}></path>
    </svg>
  );
}
