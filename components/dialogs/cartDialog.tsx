import Dialog from "@/utils/components/dialog";
import CloseButton from "./dialogCloseBtn";

export default function CartDialog() {
  return (
    <Dialog type="cart">
      <div className="fixed top-[10%] right-[10%] w-[300px] lg:w-[500px] h-[80vh] overflow-hidden rounded-2xl border z-50 shadow-lg">
        <div className="relative w-full h-full bg-white text-black p-3.5">
          <CloseButton />
          <br />
          @modal cart page
        </div>
      </div>
    </Dialog>
  );
}
