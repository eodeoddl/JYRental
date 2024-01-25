import Image from "next/image";
import images from "./images.json";

export default function Section3() {
  return (
    <section className="text-center">
      <h2 className="h2-sm sm:h2-lg trucate sm:whitespace-normal break-words">
        Services
      </h2>
      <div className="flex flex-col sm:flex-row gap-3.5">
        {images.map(({ url, alt }) => (
          <div key={url} className="min-w-full sm:min-w-[33.33%]">
            <div key={url} className="relative w-full h-[250px]">
              <Image
                src={url}
                alt={alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="inline-block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] bg-btn-light-blue text-white mx-auto">
              CTA Button
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
