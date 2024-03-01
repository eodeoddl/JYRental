import Product_detail from "@/components/products/products_detail/product_detail";

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

  return <Product_detail data={data} productId={params.productId} />;
}
