"use client";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="w-full grid grid-cols-1 gap-3 p-8">
      <span className="text-center text-xl font-bold">
        계정이 있으신가요? 로그인하세요
      </span>
      <input
        type="text"
        placeholder="이메일"
        className="border rounded-lg px-2 py-1 focus:border-btn-light-blue outline-none"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border rounded-lg px-2 py-1 focus:border-btn-light-blue outline-none"
      />
      <label>
        <input type="checkbox" className="peer mr-1" />
        <span className="peer-checked:text-black peer-checked:font-bold text-default-gray text-xs">
          기억하기
        </span>
      </label>
      <input
        type="submit"
        value="로그인"
        className="w-40 justify-self-center border text-white font-bold bg-btn-light-blue hover:bg-btn-dark-blue p-1.5 rounded-2xl cursor-pointer"
        onClick={e => e.preventDefault()}
      />
      <Link
        href=""
        className="inline-block text-center text-btn-light-blue text-sm underline underline-offset-2"
      >
        비밀번호를 잊어버리셨나요?
      </Link>
      <div className="text-center text-sm">
        <span className="font-bold">진영렌탈에 새로오셨나요? </span>
        <Link
          href=""
          className="underline underline-offset-2 text-btn-light-orange"
        >
          회원가입하기
        </Link>
      </div>
    </form>
  );
}
