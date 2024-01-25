import Carousel from "@/utils/components/carousel/carousel";
import Image from "next/image";

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

export default function Main() {
  return (
    <main className="flex flex-col w-[80%] mx-auto gap-6 [&>section]:self-center">
      <section className="flex gap-3 w-full flex-col sm:flex-row">
        <div className="p-0 min-w-full sm:min-w-[50%] sm:p-3">
          <h2 className="h2-sm sm:h2-lg">TextTextTextText</h2>
          <p className="paragraph-md max-h-[500px] truncate sm:whitespace-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] bg-btn-light-orange text-white">
            Button
          </button>
        </div>
        <div className="relative min-w-full sm:min-w-[50%]">
          <Image src="/img1.png" width={500} height={500} alt="product_image" />
        </div>
      </section>
      <section>
        <Carousel className="w-full" data={carouselMockup} />
      </section>
      <section>service</section>
      <section>
        <Carousel className="w-full" data={carouselMockup} />
      </section>
    </main>
  );
}
