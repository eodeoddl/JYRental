"use client";
import { ChangeEvent, MouseEventHandler, ReactNode, useState } from "react";

export default function FileInput({ Icon }: { Icon: ReactNode }) {
  const [label, setLabel] = useState("사진 첨부하기");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setLabel(file.name);
      setSelectedFile(file);
    }
  };

  const onDeleteInput: MouseEventHandler<HTMLButtonElement> = () => {
    setLabel("사진 첨부하기");
    setSelectedFile(null);
  };

  return (
    <div className="flex">
      <label
        htmlFor="file"
        className="flex items-center gap-1.5 w-fit hover:cursor-pointer"
      >
        {Icon}
        {label}
      </label>
      {selectedFile && (
        <button onClick={onDeleteInput} className="ml-2 text-black-500">
          삭제
        </button>
      )}
      <input
        id="file"
        name="file"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChangeInput}
        value=""
      />
    </div>
  );
}
