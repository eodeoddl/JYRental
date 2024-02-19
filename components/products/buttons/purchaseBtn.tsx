export default function PurchaseBtn({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      className={[
        "btn bg-primary-blue text-white hover:bg-[#006A9B]",
        className,
      ].join(" ")}
    >
      지금 구매하기
    </button>
  );
}
