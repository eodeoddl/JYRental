import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Viewport } from "@/types/common";
import Carousel1 from "@/utils/components/carousel/carousel";
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
      <main className="h-full">
        Home Component
        {/* <Carousel className="w-[80%] h-[50vh] mx-auto" data={carouselMockup} /> */}
        <Carousel1 className="w-[80%] mx-auto" data={carouselMockup} />
        <Carousel1 className="w-[80%] mx-auto" data={carouselMockup1} />
      </main>
      {/* <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-black bg-white text-black">
        AAAAAA
      </button>
      <button className="btn">BBBBB</button> */}
      <Footer />
    </>
  );
}
