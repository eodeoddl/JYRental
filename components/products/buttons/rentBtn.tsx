export default function RentBtn({ className = "" }: { className?: string }) {
  return (
    <button
      className={[
        "btn bg-primary-orange text-white hover:bg-[#CD6511]",
        className,
      ].join(" ")}
    >
      지금 렌트하기
    </button>
  );
}
