import Tab from "./tab";

export default function TabGroup({
  items,
  path,
  className = "",
}: {
  items: Item[];
  path: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex flex-wrap justify-center gap-3 mx-auto w-fit",
        className,
      ].join(" ")}
    >
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
