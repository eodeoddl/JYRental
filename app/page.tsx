import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Viewport } from "@/types/common";
import { headers } from "next/headers";

export const getHead = async () => {
  await fetch("http://localhost:3000/api", { method: "GET" });
};

export default async function Home() {
  const head = headers();
  const viewport = head.get("viewport");
  return (
    <>
      <Header viewport={viewport as Viewport} />
      <main className="h-[100vh]"> Home Component </main>
      <Footer />
    </>
  );
}
