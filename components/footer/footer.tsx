import { Icon } from "@/utils/components/icon";
import { TypedIcons } from "./types/types";
import socialIcons from "./socialIcons.json";
import contents from "./contents.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] text-center text-default-dark-gray mt-10 p-5">
      <div className="grid gird-cols-1 sm:grid-cols-3 w-[80%] mx-auto py-5 justify-center gap-3 text-center sm:text-left">
        {/* quik links */}
        <div>
          <span className="inline-block text-2xl font-bold mb-3">퀵 링크</span>
          <ul>
            {contents.quickLinks.map(({ text, link }, i) => (
              <li key={i}>
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* customer resources */}
        <div>
          <span className="inline-block text-2xl font-bold mb-3">
            고객 리소스
          </span>
          <ul>
            {contents.customerResources.map(({ text, link }, i) => (
              <li key={i}>
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* contact */}
        <div>
          <span className="inline-block text-2xl font-bold mb-3">문의하기</span>
          <ul>
            {contents.contact.map(({ text, icon, link }, i) => (
              <li key={i}>
                <Link href={link}>
                  <Icon
                    path={TypedIcons[icon].path}
                    viewBox={TypedIcons[icon].viewBox}
                    className="inline-block w-5 h-5 mr-3 fill-btn-light-blue"
                  />
                  <span className="inline-block">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* social Links */}
      <ul className="flex gap-4 mx-auto my-5 w-max">
        {socialIcons.map(({ name, link, path, viewBox }) => (
          <li key={name} className="">
            <Link
              href={link}
              className="group inline-block p-2 rounded-full bg-white hover:bg-btn-light-blue drop-shadow-[#CACACA_3px_3px_2px]"
            >
              <Icon
                path={path}
                viewBox={viewBox}
                className="w-6 h-6 fill-btn-light-blue group-hover:fill-white"
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* copyright */}
      <span className="text-center mx-auto mb-5">
        @2023 Copyright JY Rental. All rights reserved by Idea Mood
      </span>
    </footer>
  );
}
