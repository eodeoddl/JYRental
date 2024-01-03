import Link from 'next/link';

const routes = [
  { displayName: '홈', route: '/' },
  { displayName: '제품', route: '/products' },
  { displayName: '서비스', route: '/service' },
  { displayName: '고객지원', route: '/clientSupport' },
  { displayName: '회사소개', route: '/about' },
];

export default function Navigation_desktop() {
  return (
    <nav className=''>
      <ul>
        {routes.map(({ displayName, route }) => (
          <li key={displayName}>
            <Link href={route}>{displayName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
