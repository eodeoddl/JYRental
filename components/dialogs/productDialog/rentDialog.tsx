"use client";
import Counter from "@/components/products/products_detail/counter";
import Dialog from "@/utils/components/dialog";

export default function RentDialog() {
  return (
    <Dialog type="rent">
      <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 p-3.5 text-black bg-white w-11/12 sm:w-5/12 rounded-2xl shadow-2xl z-50">
        rent dialog
        {/* <Counter /> */}
      </div>
    </Dialog>
  );
}
