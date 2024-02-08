import TabGroup from "@/utils/components/tab/tabGroup";

export default function Layout({ tabItems }: { tabItems: React.ReactNode }) {
  return (
    <>
      <TabGroup
        items={[
          { text: "계정", slug: "" },
          { text: "주문", slug: "orderHistory" },
          { text: "저장된 품목", slug: "savedItem" },
          { text: "주소", slug: "address" },
        ]}
        path="/userBoard"
      />
      {tabItems}
    </>
  );
}
