import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Navigation from "@/components/navigation/navigation_desktop";

export default async function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className=""> Home </main>
      <Footer />
    </>
  );
}
