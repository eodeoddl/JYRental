import BackButton from "@/utils/components/backButton";

export default function Page() {
  return (
    <div className="w-10/12 mx-auto">
      <h3 className="w-fit h3-sm sm:h3-lg">장바구니</h3>
      <span>
        아직 결제할 준비가 되지 않으셨나요?
        <BackButton
          text="쇼핑 계속하기"
          className="underline text-primary-blue"
          icon={false}
        />
      </span>
    </div>
  );
}
