import BackButton from "@/utils/components/backButton";

export default function Page({ params }: { params: { productId: number } }) {
  return (
    <div>
      <BackButton className="flex" />
      <div className="w-56 h-56 bg-black"></div>
    </div>
  );
}
