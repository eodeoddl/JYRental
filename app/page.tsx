import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Navigation_Mobile from "@/components/navigation/navigation_mobile";
import { Viewport } from "@/utils/types/type";
import { headers } from "next/headers";

// export const getServerSideProps = (async () => {
//   console.log(" Home pages response console => ");
//   console.log(NextResponse.next(), headers());
//   return { props: { '1': true } };
// }) satisfies GetServerSideProps<{ props: { [key: string]: boolean } }>;

export const getHead = async () => {
  console.log("fetch head");
  await fetch("http://localhost:3000/api", { method: "GET" });
};

export default async function Home() {
  const head = headers();
  const viewport = head.get("viewport");
  return (
    <>
      <Header viewport={viewport as Viewport} />
      <Navigation_Mobile viewport={viewport as Viewport} />
      <main className=""> Home Component </main>
      <Footer />
    </>
  );
}
