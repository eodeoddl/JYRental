import Footer from "@/components/footer/footer";
import Main from "@/components/home/main";
import PageNation from "@/utils/components/pagination/pagenation";
// import dynamic from "next/dynamic";

// export const getHead = async () => {
//   await fetch("http://localhost:3000/api", { method: "GET" });
// };

export default async function Home() {
  return (
    <>
      <Main />
      <Footer />
      {/* <main className="h-full">
        <Carousel className="w-[80%] mx-auto" data={carouselMockup} />
        <Carousel className="w-[80%] mx-auto" data={carouselMockup1} />
      </main> */}
      {/* <PageNation totalData={51} dataInView={5} /> */}
    </>
  );
}
