import { Icon } from "@/utils/components/icon";
import icons from "./icons.json";
import text from "./text.json";

export default function Footer() {
  // const { quickLinks }: { quickLinks: string[] } = text;
  console.log(icons);
  return (
    <footer className="h-[350px] w-full bg-primary-blue">
      <div className="flex flex-col sm:flex-row">
        {Object.keys(text as { [key: string]: {} }).map(title => (
          <div key={title}>
            <span className="inline-block text-xl font-bold mb-4">{title}</span>
            <ul>
              {(text[title] as { [key: string]: {} }).map(
                ({ text, icon }, i) => (
                  <li key={i}>
                    {icon ? (
                      <>
                        <Icon
                          path={icons[icon].path}
                          viewBox={icons[icon].viewBox}
                          className="w-5 h-5"
                        />
                        <span>{text}</span>
                      </>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className=""></div>
      <div className=""></div>
    </footer>
  );
}
