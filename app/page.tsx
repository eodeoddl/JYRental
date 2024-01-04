import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation_desktop';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export default function Home() {
  console.log('page header render ');
  const response = NextResponse.next().headers;
  console.log(response);
  return (
    <>
      {/* <Navigation /> */}
      <Header />
      <main className=''> Home </main>
      <Footer />
    </>
  );
}
