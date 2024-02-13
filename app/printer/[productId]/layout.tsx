import Footer from "@/components/footer/footer";
import TabGroup from "@/utils/components/tab/tabGroup";

export default function Layout({
  children,
  tabItems,
  params,
}: {
  children: React.ReactNode;
  tabItems: React.ReactNode;
  params: { productId: number };
}) {
  return (
    <div>
      {children}
      <TabGroup
        items={[
          { text: "제품세부정보", slug: "" },
          { text: "제품 기능", slug: "tab1" },
          { text: "제품 리뷰", slug: "tab2" },
          { text: "질문과 답변", slug: "tab3" },
        ]}
        path={`/printer/${params.productId}`}
      />
      {tabItems}
      <Footer />
    </div>
  );
}
