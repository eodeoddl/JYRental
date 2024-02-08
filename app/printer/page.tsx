import BackButton from "@/components/products/backButton";
import Products from "@/components/products/products";
import PageNation from "@/utils/components/pagination/pagenation";
const items = Array.from({ length: 84 }, (_, i) => ({
  productName: "title" + i,
  src: "/itemImage.png",
  discription: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with
    the release of Letraset sheets containing Lorem Ipsum passages, and
    more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.`,
  price: 1000,
  rentPrice: 1000,
}));

export default async function PrinterPage({
  searchParams,
}: {
  searchParams: { pageIndex: number };
}) {
  console.log("server component search params", searchParams);
  const dataInView = 4;

  // need items all length by filter value then use as provider Props
  const totalData = 84; // fetching by server
  const { pageIndex } = searchParams;

  return (
    <section className="p-5 h-[1500px]">
      <BackButton />
      <h3 className="w-fit mx-auto h3-sm sm:h3-lg">사무복합기</h3>
      <div className="w-fit mx-auto">
        <Products
          items={items.slice(
            (pageIndex || 0) * dataInView,
            (pageIndex || 0) * dataInView + dataInView,
          )}
        />
        <PageNation
          totalData={totalData}
          pageAmount={3}
          dataInView={dataInView}
        />
      </div>
    </section>
  );
}
