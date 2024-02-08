import Footer from "@/components/footer/footer";
import Main from "@/components/home/main";
// import dynamic from "next/dynamic";

// export const getHead = async () => {
//   await fetch("http://localhost:3000/api", { method: "GET" });
// };

export default async function Home() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}
