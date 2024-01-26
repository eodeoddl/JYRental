import Section1 from "./section1/section";
import Section2 from "./section2/section";
import Section3 from "./section3/section";
import Section4 from "./section4/section";
import Section5 from "./section5/section";

const carouselMockup = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export default function Main() {
  // const styles = useRef({});

  return (
    <main className="grid grid-cols-1 gap-5 sm:gap-10 w-[80%] mx-auto">
      <Section1 />
      <Section2 carouselMockup={carouselMockup} />
      <Section3 />
      <Section4 carouselMockup={carouselMockup} />
      <Section5 />
    </main>
  );
}
