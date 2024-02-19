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
    <>
      {children}
      <TabGroup
        items={[
          { text: "제품세부정보", slug: "" },
          { text: "제품 기능", slug: "feature" },
          { text: "질문과 답변", slug: "qna" },
          { text: "비슷한 제품", slug: "similar" },
        ]}
        path={`/printer/${params.productId}`}
        className="mb-5"
      />
      {tabItems}
      <Footer />
    </>
  );
}
