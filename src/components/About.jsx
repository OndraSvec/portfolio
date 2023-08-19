import { useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const About = () => {
  const headingRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        }
      });
    });
    [headingRef, textRef1, textRef2].forEach((element) =>
      observer.observe(element.current),
    );
  }, []);
  return (
    <Section
      id={"about"}
      className={
        "text-indigo-500 px-4  min-h-screen flex flex-col justify-center items-center dark:text-indigo-200 customBreakPoint:scroll-m-10"
      }
    >
      <div className="flex flex-col items-center gap-4">
        <SectionHeading ref={headingRef} heading={"About"} />
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
          <p
            ref={textRef1}
            className="opacity-0 transition-opacity duration-500 delay-200 ease-in max-w-md w-full font-medium text-lg sm:text-right sm:text-xl md:text-2xl lg:text-3xl"
          >
            Thank you for visiting my portfolio. Please take a look around!
          </p>
          <p
            ref={textRef2}
            className="opacity-0 transition-opacity duration-500 delay-300 ease-in max-w-md w-full sm:text-lg md:text-xl lg:text-2xl"
          >
            In early 2023, I was looking for a career path that would enable me
            to work from places I would otherwise not be able to. Upon taking
            the plunge and taking up web development, I quickly realised that
            coding is quite fun and rewarding in its own right. Now I{"'"}m just
            really excited to see how far I can progress and where this journey
            takes me.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
