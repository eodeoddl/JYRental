import Image from "next/image";
import images from "./images.json";

export default function Section5() {
  return (
    <section className="text-center">
      <h2 className="h2-sm sm:h2-lg trucate sm:whitespace-normal break-words">
        Our Strength
      </h2>
      <div className="flex flex-col sm:flex-row gap-3.5">
        {images.map(({ url, alt }) => (
          <div key={url} className="min-w-full sm:min-w-[24%]">
            <div className="relative h-[250px] w-full">
              <Image
                src={url}
                alt={alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="inline-block mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
