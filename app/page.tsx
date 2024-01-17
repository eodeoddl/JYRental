import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Viewport } from "@/types/common";
import Carousel from "@/utils/components/carousel";
import { headers } from "next/headers";

// export const getHead = async () => {
//   await fetch("http://localhost:3000/api", { method: "GET" });
// };

const carouselMockup = [{}, {}, {}, {}, {}];

export default async function Home() {
  const head = headers();
  const viewport = head.get("viewport");
  return (
    <>
      <Header viewport={viewport as Viewport} />
      <main className="h-[100vh]">
        Home Component
        <Carousel
          className="w-[300px] h-[200px]"
          data={carouselMockup}
          amount={2}
        />
      </main>
      {/* <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-black bg-white text-black">
        AAAAAA
      </button>
      <button className="btn">BBBBB</button> */}
      <Footer />
    </>
  );
}
