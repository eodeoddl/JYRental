"use client";
import Link from "next/link";
import menu from "./menu.json";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect } from "react";

export default function UserMenu() {
  const segment = useSelectedLayoutSegment("userDashBoard");

  useEffect(() => {
    console.log(segment);
  }, []);

  return (
    <nav className="flex flex-wrap justify-center gap-3 mx-auto w-fit text-default-gray">
      {menu.map(({ name, slot }) => (
        <Link
          key={slot}
          href={`/userDashBoard/${slot}`}
          className="ilnine-block p-3 w-fit"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
