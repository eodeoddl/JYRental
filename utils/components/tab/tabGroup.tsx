import Tab from "./tab";

export default function TabGroup({
  items,
  path,
}: {
  items: Item[];
  path: string;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mx-auto w-fit">
      {items.map(item => (
        <Tab key={path + item.slug} path={path} item={item} />
      ))}
    </div>
  );
}

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
  parallelRoutesKey?: string;
};
