import SavedItem from "@/components/userBoard/savedItem/savedItem";

export type ItemType = {
  productName: string;
  productDetail: string;
  description: string;
  price: number;
  imageSrc: string;
};

export default function Page() {
  // fetch items here
  const items: ItemType[] = Array.from({ length: 10 }, (_, i) => ({
    productName: "productName" + i,
    productDetail: "productDetail",
    description:
      "[Printer Description] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    price: 1000000,
    imageSrc: "/itemImage.png",
  }));
  return <SavedItem items={items} />;
}
