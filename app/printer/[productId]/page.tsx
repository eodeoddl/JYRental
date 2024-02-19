import AddCartBtn from "@/components/products/buttons/addCartBtn";
import PurchaseBtn from "@/components/products/buttons/purchaseBtn";
import RentBtn from "@/components/products/buttons/rentBtn";
import PreviewItemsWithThumbnail from "@/components/products_detail/PreviewItemsWithThumbnail";
import Product_detail from "@/components/products_detail/product_detail";
import BackButton from "@/utils/components/backButton";

export type ProductItem = {
  title: string;
  productId: string;
  imagesSrc: string[];
  features: string[];
  speed: number;
  price: number;
  pricePerMonth: number;
  description: string;
};

export default function Page({ params }: { params: { productId: number } }) {
  // data fetching with params.product Id
  const data: ProductItem = {
    title: "A3 컬러 디지털 복합기 MX5 시리즈 23 ppm SL-X5230NR",
    productId: "SL-X5230NR",
    imagesSrc: Array.from({ length: 5 }, (_, i) =>
      i % 2 ? "/Img1.png" : "/itemImage.png",
    ),
    features: ["a", "b", "c"],
    description: "",
    price: 1000,
    pricePerMonth: 1000,
    speed: 200,
  };

  return <Product_detail data={data} />;

  // return (
  //   <div className="p-5">
  //     <BackButton className="flex mb-5" />
  //     <section className="w-10/12 mx-auto">
  //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
  //         <div className="grid grid-cols-[1fr,3fr] grid-rows-[minmax(auto,500px)] gap-5">
  //           <PreviewItemsWithThumbnail data={data} />
  //         </div>
  //         <div className="divide-y [&>*]:my-3">
  //           <ul className="list-disc list-inside">
  //             {/* just parts of features */}
  //             <span>Features</span>
  //             {data.features.map((text, i) => (
  //               <li key={i}>{text}</li>
  //             ))}
  //           </ul>
  //           <div>
  //             <span>Output Speed</span>
  //             <div className="w-fit border border-primary-blue p-2 my-1.5">
  //               {data.speed}ppm
  //             </div>
  //           </div>
  //           <div>2 type of price tag</div>
  //           <div className="grid grid-rows-2 ">
  //             <div className="flex">
  //               <RentBtn />
  //               <PurchaseBtn />
  //             </div>
  //             <div className="flex">
  //               <AddCartBtn />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
}
