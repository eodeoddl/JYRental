"use client";
import Image from "next/image";
import service from "./assets/service.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Service() {
  const pathname = usePathname();
  return (
    <div className="w-10/12 mx-auto grid gap-5">
      <h3 className="text-center h3-sm sm:h3-lg">서비스</h3>
      {service.map(({ imageSrc, title, discription }, i) => {
        return (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[300px,1fr]">
            <Image
              src={imageSrc}
              alt="service"
              width={300}
              height={300}
              className="self-center"
            />
            <div className="space-y-4">
              <h4 className="h4-sm sm:h4-lg">{title}</h4>
              <p>{discription}</p>
              <button className="text-white bg-primary-orange btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] ">
                <Link href={`${pathname}/request`}>요청하기</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
