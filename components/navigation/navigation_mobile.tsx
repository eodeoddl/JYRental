const routes = [
  { displayName: '홈', route: '/' },
  { displayName: '제품', route: '/products' },
  { displayName: '서비스', route: '/service' },
  { displayName: '고객지원', route: '/clientSupport' },
  { displayName: '회사소개', route: '/about' },
];

export default function Navigation_Mobile() {
  return <nav className=''>Mobile Navigation</nav>;
}
