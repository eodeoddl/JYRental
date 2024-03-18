"use client";

import type { AddressType } from "@/app/userBoard/@tabItems/address/page";

export default function InputForm_readonly({ data }: { data: AddressType }) {
  const inputStyle = "h-10 rounded border outline-none p-3";
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      className="space-y-5 mb-5 outline p-2.5 rounded"
    >
      <div className="w-full flex flex-row justify-between font-bold text-base">
        <span>{data.title}</span>
        <div>기본으로 설정 switch</div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <input
          placeholder="우편번호"
          value={data?.zipCode}
          disabled
          className={[inputStyle].join(" ")}
        />
        <input
          placeholder="도로명주소"
          value={data?.streetNameAddress}
          disabled
          className={[inputStyle].join(" ")}
        />
        <input
          placeholder="지번주소"
          value={data?.address}
          disabled
          className={[inputStyle].join(" ")}
        />
        <input
          placeholder="세부주소"
          value={data?.addressDetail}
          disabled
          className={[inputStyle].join(" ")}
        />
        <input
          placeholder="핸드폰 번호"
          value={data?.phoneNumber}
          disabled
          className={[inputStyle, "col-span-2"].join(" ")}
        />
      </div>
      <div className="flex gap-2.5">
        <button className="btn bg-primary-blue hover:bg-btn-dark-blue">
          수정하기
        </button>
        <button className="btn bg-transparent border hover:text-white hover:bg-red-500">
          삭제하기
        </button>
      </div>
    </form>
  );
}
