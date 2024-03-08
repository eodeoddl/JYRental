import Carousel from "@/utils/components/carousel/carousel";

export default function Section2({ carouselMockup }: any) {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="h2-sm sm:h2-lg trucate sm:whitespace-normal break-words">
          Rent Printers
        </h2>
        <p className="truncate">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <Carousel className="mb-8" data={carouselMockup} />
      <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] bg-btn-light-orange text-white mx-auto">
        지금 렌트하기
      </button>
    </section>
  );
}
