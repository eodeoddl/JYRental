import Image from "next/image";

export default function Section1() {
  return (
    <section className="grid grid-cols-1 gap-3 w-full flex-col sm:grid-cols-2">
      <div className="p-0 min-w-full sm:min-w-[50%] sm:p-3">
        <h2 className="h2-sm sm:h2-lg trucate sm:whitespace-normal break-words">
          TextTextTextText
        </h2>
        <p className="paragraph-md max-h-[500px] sm:whitespace-normal my-5">
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
        <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] bg-btn-light-orange text-white mx-auto sm:mx-0">
          Button
        </button>
      </div>
      <div className="relative order-first sm:order-last">
        <Image
          src="/img1.png"
          alt="product_image"
          style={{ width: "100%", height: "auto" }}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
