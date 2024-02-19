export default function AddCartBtn({ className = "" }: { className?: string }) {
  return (
    <button
      className={[
        "btn border border-primary-blue hover:bg-[#006A9B] hover:text-white",
        className,
      ].join(" ")}
    >
      장바구니에 추가하기
    </button>
  );
}
