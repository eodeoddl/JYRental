import Link from "next/link";

const routes = [
  { displayName: "홈", route: "/" },
  { displayName: "제품", route: "/products" },
  { displayName: "서비스", route: "/service" },
];

export default function Navigation_desktop() {
  return (
    <nav className="">
      <ul className="flex">
        {routes.map(({ displayName, route }) => (
          <li key={displayName}>
            <Link href={route}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
