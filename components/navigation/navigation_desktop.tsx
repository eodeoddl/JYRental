import Link from "next/link";
import routes from "./routes.json";

export default function Navigation_desktop() {
  return (
    <nav className="">
      <ul className="flex ">
        {routes.data.map(({ displayName, route }) => (
          <li key={displayName}>
            <Link href={route}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
