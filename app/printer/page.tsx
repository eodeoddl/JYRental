import BackButton from "@/utils/components/backButton";
import Filter from "@/components/products/filter";
import M_Filter from "@/components/products/filter_mobile";
import Product_Menu from "@/components/products/product_menu";
import Products from "@/components/products/products";
import PageNation from "@/utils/components/pagination/pagenation";

// need fetching data from server
const items = Array.from({ length: 84 }, (_, i) => ({
  productId: 1 + i,
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

type Items = {
  productId: number;
  productName: string;
  src: string;
  description: string;
  price: number;
}[];

export default async function Page({
  searchParams,
}: {
  searchParams: { pageIndex: number };
}) {
  const dataInView = 4;

  // need items all length by filter value then use as pagenation Props
  const totalData = 84; // fetching by server
  const { pageIndex } = searchParams;

  return (
    <section className="p-10">
      <BackButton className="hidden sm:flex" />
      <h3 className="w-fit mx-auto h3-sm sm:h3-lg">사무복합기</h3>
      <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_3fr] gap-5 w-fit mx-auto my-5">
        {/* desktop */}
        <div className="hidden sm:block sm:col-span-1">
          <Filter />
        </div>
        {/* mobile */}
        <div className="flex sm:hidden justify-between col-span-1">
          <M_Filter />
        </div>
        <div className="sm:col-span-1">
          {/* desktop */}
          <div className="hidden sm:flex">
            <Product_Menu totalData={totalData} />
          </div>
          <Products
            items={items.slice(
              (pageIndex || 0) * dataInView,
              (pageIndex || 0) * dataInView + dataInView,
            )}
          />
        </div>
        <div className="w-fit sm:col-span-2 sm:ml-auto">
          <PageNation
            totalData={totalData}
            pageAmount={3}
            dataInView={dataInView}
          />
        </div>
      </div>
    </section>
  );
}
