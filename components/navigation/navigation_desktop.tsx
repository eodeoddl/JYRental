import Link from "next/link";
import routes from "./routes.json";

export default function Navigation_desktop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <nav className={className}>
      <ul className="flex justify-center gap-4 text-default-dark-gray font-extrabold text-lg">
        {routes.data.map(({ displayName, route }) => (
          <li key={displayName} className="group">
            <Link
              href={route}
              className="group-hover:text-[#01A0E9] group-hover:underline group-hover:underline-offset-4"
            >
              {displayName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
