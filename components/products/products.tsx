import Image from "next/image";
import Link from "next/link";

type Items = {
  productName: string;
  src: string;
  discription: string;
  price: number;
  rentPrice: number;
}[];

export default function Products({ items }: { items: Items }) {
  return (
    <>
      <ul className="w-[70%]">
        {items.map(({ productName, discription, src }, i) => (
          <li key={i}>
            <Link
              href=""
              className="grid grid-cols-[minmax(200px,_30%)_auto] my-10"
            >
              <div className="relative text-center">
                <Image
                  src={src}
                  alt={productName}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
                <span className="inline-block">{productName}</span>
              </div>
              <div>
                <div className="flex">
                  <p className="">{discription}</p>
                  <div className="w-[100px]"></div>
                </div>
                <div></div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
