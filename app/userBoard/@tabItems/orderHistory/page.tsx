import OrderHistory from "@/components/userBoard/orderHistory/orderHistory";

import OrderHistoryEmpty from "@/components/userBoard/orderHistory/orderHistoryEmpty";

export type HistroyItem = {
  productName: string;
  productId: number;
  description: string;
  imageSrc: string;
};

export default function Page() {
  // fetching order history here
  const orderHistory: HistroyItem[] = Array.from({ length: 18 }, (_, i) => ({
    productName: "productName" + i,
    productId: i,
    description:
      "[Printer Description] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    imageSrc: "/itemImage.png",
  }));

  // const orderHistory: OrderHistoryItems = [];

  return orderHistory.length ? (
    <OrderHistory items={orderHistory} />
  ) : (
    <OrderHistoryEmpty />
  );
}
