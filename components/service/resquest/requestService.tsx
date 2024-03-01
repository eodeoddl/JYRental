"use client";
import { Icon } from "@/utils/components/icon";
import icons from "../assets/icons.json";
import SelectBox from "@/utils/components/selectBox";
import BackButton from "@/utils/components/backButton";
import FileInput from "@/utils/components/fileInput";

export default function RequestService() {
  const inputStyle =
    "w-6/12 bg-default-light-blue rounded-xl p-2 border-2 focus:border-btn-light-blue outline-none";

  return (
    <div className="mx-auto w-10/12 space-y-6">
      <BackButton />
      <div className="flex items-center gap-3">
        <Icon
          path={icons.service.path}
          viewBox={icons.service.veiwBox}
          className="w-10 h-10"
        />
        <h3 className="h3-sm sm:h3-lg">서비스 요청하기</h3>
      </div>
      <p>
        서비스 요청 페이지를 탐색하여 맞춤형 지원을 손쉽게 시작하세요. 서비스
        요청을 원활하게 제출하시면 당사의 전담 팀이 신속하게 귀하의 요구 사항에
        응하여 신속하고 맞춤화된 솔루션을 보장 해 드립니다.
      </p>

      <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="이름"
          className={inputStyle}
        />
        <input
          type="text"
          name="email"
          placeholder="이메일"
          className={inputStyle}
        />
        <SelectBox
          className={inputStyle}
          activeClassName="border-2 border-primary-blue"
          initialText="서비스 분류"
          options={[
            { text: "네트워크 프린팅 솔루션" },
            { text: "사무기기 유지관리" },
            { text: "보증 및 수리" },
          ]}
          dropdownIcon={isActive => (
            <Icon
              path={icons.dropdown.path}
              viewBox={icons.dropdown.viewBox}
              className={[
                "w-3 h-3 transition-transform duration-500",
                `${isActive ? "rotate-0" : "rotate-180"}`,
              ].join(" ")}
            />
          )}
        />
        <textarea
          className={[inputStyle, "[resize:none]"].join(" ")}
          placeholder="서비스 설명 (최대 255자)"
          rows={5}
          name="description"
        />
        <FileInput
          Icon={
            <Icon
              path={icons.file.path}
              viewBox={icons.file.veiwBox}
              className="w-5 h-5"
            />
          }
        />
        <button
          type="submit"
          className="btn bg-primary-blue text-white w-fit hover:bg-[#006A9B]"
        >
          요청하기
        </button>
      </form>
    </div>
  );
}
