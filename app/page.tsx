import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from "@/components/home/main";
import { Viewport } from "@/types/common";
import PageNation from "@/utils/components/pagination/pagenation";
import { headers } from "next/headers";
// import dynamic from "next/dynamic";

// export const getHead = async () => {
//   await fetch("http://localhost:3000/api", { method: "GET" });
// };

const carouselMockup = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const carouselMockup1 = [{}, {}, {}, {}, {}];

export default async function Home() {
  const header = headers();
  const viewport = header.get("viewport");
  return (
    <>
      <Header viewport={viewport as Viewport} />
      <Main />
      {/* <main className="h-full">
        <Carousel className="w-[80%] mx-auto" data={carouselMockup} />
        <Carousel className="w-[80%] mx-auto" data={carouselMockup1} />
        <PageNation totalData={51} dataInView={5} />
      </main> */}
      {/* <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-black bg-white text-black">
        AAAAAA
      </button>
      <button className="btn">BBBBB</button> */}
      <Footer />
    </>
  );
}
