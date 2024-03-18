"use client";
import type { AddressType } from "@/app/userBoard/@tabItems/address/page";
import InputForm_readonly from "./inputForm_readonly";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Address({ data }: { data?: AddressType[] }) {
  const [edit, setEdit] = useState(false);
  const router = useRouter();

  return (
    <div className="w-10/12 lg:w-6/12 mx-auto my-10">
      <span className="inline-block text-xl font-bold mb-5">주소</span>
      <button
        // onClick={}
        className="btn-animate bg-primary-blue text-white before:btn-before before:hover:btn-animate-before before:hover:bg-btn-dark-blue hover:text-black"
      >
        새 주소 추가하기
      </button>
      <hr className="my-5" />
      {data &&
        data.map((address, i) => <InputForm_readonly data={address} key={i} />)}
    </div>
  );
}
