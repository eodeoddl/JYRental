import Link from "next/link";
import routes from "./routes.json";

export default function Navigation_desktop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <nav className={className}>
      <ul className="flex justify-center gap-4">
        {routes.data.map(({ displayName, route }) => (
          <li key={displayName}>
            <Link href={route}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
