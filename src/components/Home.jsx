import { useEffect, useRef } from "react";
import Section from "./Section";

const Home = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        }
      });
    });
    [textRef1, textRef2, textRef3, textRef4].forEach((element) =>
      observer.observe(element.current),
    );
  }, []);
  return (
    <Section
      id={"home"}
      className={"min-h-screen flex flex-col justify-center"}
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="px-4 text-indigo-500 text-xl flex flex-col gap-2 sm:text-2xl md:text-3xl dark:text-indigo-200">
          <p
            ref={textRef1}
            className="opacity-0 transition-opacity duration-500 delay-100 ease-in"
          >
            Hello, my name is
          </p>
          <h1
            ref={textRef2}
            className="opacity-0 transition-opacity duration-500 delay-200 ease-in text-2xl text-indigo-700 font-medium sm:text-3xl md:text-4xl dark:text-indigo-400"
          >
            Ondra Švec
          </h1>
          <p
            ref={textRef3}
            className="opacity-0 transition-opacity duration-500 delay-300 ease-in"
          >
            and I{"'"}m a
          </p>
          <h2
            ref={textRef4}
            className="opacity-0 transition-opacity duration-500 delay-[400ms] ease-in text-2xl text-indigo-700 font-medium sm:text-3xl md:text-4xl dark:text-indigo-400"
          >
            Front-End Developer.
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default Home;
