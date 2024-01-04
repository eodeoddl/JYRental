// 'use client';

// import { useLayoutEffect, useRef, useState } from 'react';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export default function Header() {
  // resizeable 테스트 후 Hooks로 따로 관리할 예정
  // const resizeable = useRef<HTMLElement | null>(null);
  // const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // useLayoutEffect(() => {
  //   const Element = resizeable.current;
  //   const breakPoint = 430;
  //   const resizeObserver = new ResizeObserver(([entry]) => {
  //     const { inlineSize } = entry.borderBoxSize[0];
  //     setIsMobile(inlineSize < breakPoint);
  //   });
  //   Element && resizeObserver.observe(Element);

  //   return () => {
  //     Element && resizeObserver.unobserve(Element);
  //   };
  // }, []);

  // ssr render
  // const response = NextResponse.next().headers;
  // console.log('response value => ', response);

  // const header = headers();
  // console.log(header);

  return (
    // <header ref={resizeable} className='w-full'>
    //   some other static content,,,
    //   {isMobile !== null &&
    //     (isMobile ? ' Header is Mobile ' : ' Header is desktop ')}
    // </header>
    <header>Header</header>
  );
}
