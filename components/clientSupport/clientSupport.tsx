"use client";
import { Icon } from "@/utils/components/icon";
import contactCard from "./assets/contactCards.json";
import SelectBox from "@/utils/components/selectBox";
import icons from "./assets/icons.json";
import FileInput from "@/utils/components/fileInput";

export default function ClientSupport() {
  const inputStyle =
    "bg-default-light-blue rounded-xl p-2 border-2 focus:border-btn-light-blue outline-none";

  return (
    <div className="mx-auto mt-5 w-10/12 text-center space-y-10">
      <h3 className="h3-sm sm:h3-lg mb-5">연락하기</h3>
      <span>도움이 필요하시거나 질문이 있으시면, 저희가 도와드리겠습니다.</span>
      <div className="flex flex-col sm:flex-row justify-center gap-3.5">
        {contactCard.map(({ title, description, btnText, icon }, i) => (
          <div
            className="text-left max-w-[300px] space-y-3.5 shadow-lg p-2.5 rounded-2xl mx-auto sm:mx-0"
            key={i}
          >
            <Icon
              path={icon.path}
              viewBox={icon.viewBox}
              className="w-10 h-10 fill-primary-blue bg-default-light-blue p-1 rounded-2xl"
            />
            <h4 className="h4-lg">{title}</h4>
            <span className="inline-block">{description}</span>
            <button className="btn-animate before:btn-before before:hover:btn-before-animate before:hover:bg-[#808080] bg-primary-blue text-white">
              {btnText}
            </button>
          </div>
        ))}
      </div>
      <h3 className="h3-sm sm:h3-lg mb-5">문의하기</h3>
      <span className="inline-block">
        저희는 고객님의 의견을 듣고 싶습니다! 질문 또는 피드백이 있거나 문의하고
        싶으신가요? 저희는 고객님을 위해 여기 있습니다. 아래 양식을 작성해
        주시면 최대한 빨리 연락드리겠습니다.
      </span>
      <form
        onSubmit={e => e.preventDefault()}
        className="grid auto-rows-auto w-full sm:w-6/12 mx-auto space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="이름"
          className={[inputStyle, "w-full"].join(" ")}
        />
        <div className="flex gap-3.5 w-full">
          <input
            type="email"
            name="email"
            placeholder="email"
            className={[inputStyle, "w-6/12 h-fit"].join(" ")}
          />
          <div className="w-6/12">
            <SelectBox
              className={[inputStyle, "w-full"].join(" ")}
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
          </div>
        </div>
        <input
          className={[inputStyle, "w-full"].join(" ")}
          name="subject"
          placeholder="주제"
        />
        <textarea
          rows={5}
          className={[inputStyle, "w-full [resize:none]"].join(" ")}
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
