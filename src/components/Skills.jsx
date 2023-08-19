import cssLogoDark from "/logos/dark/css3_dark.svg";
import firebaseLogoDark from "/logos/dark/firebase_dark.svg";
import htmlLogoDark from "/logos/dark/html5_dark.svg";
import jsLogoDark from "/logos/dark/js_dark.svg";
import reactLogoDark from "/logos/dark/reactjs_dark.svg";
import reactRouterLogoDark from "/logos/dark/react-router_dark.svg";
import tailwindLogoDark from "/logos/dark/tailwind_dark.svg";
import typescriptLogoDark from "/logos/dark/typescript_dark.svg";
import threejsLogoDark from "/logos/dark/threejs_dark.svg";
import blenderLogoDark from "/logos/dark/blender_dark.svg";
import cssLogo from "/logos/light/css3.svg";
import firebaseLogo from "/logos/light/firebase.svg";
import htmlLogo from "/logos/light/html5.svg";
import jsLogo from "/logos/light/js.svg";
import reactLogo from "/logos/light/reactjs.svg";
import reactRouterLogo from "/logos/light/react-router.svg";
import tailwindLogo from "/logos/light/tailwind.svg";
import typescriptLogo from "/logos/light/typescript.svg";
import threejsLogo from "/logos/light/threejs.svg";
import blenderLogo from "/logos/light/blender.svg";
import Section from "./Section";
import SkillLink from "./SkillLink";
import SectionHeading from "./SectionHeading";
import { useEffect, useRef } from "react";

const Skills = ({ darkMode }) => {
  const textRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef6 = useRef(null);
  const imgRef7 = useRef(null);
  const imgRef8 = useRef(null);
  const imgRef9 = useRef(null);
  const imgRef10 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        }
      });
    });
    [
      textRef,
      imgRef1,
      imgRef2,
      imgRef3,
      imgRef4,
      imgRef5,
      imgRef6,
      imgRef7,
      imgRef8,
      imgRef9,
      imgRef10,
    ].forEach((element) => observer.observe(element.current));
  }, []);
  return (
    <Section
      id={"skills"}
      className={
        "lg:scroll-mt-20  customBreakPoint:scroll-mt-10 px-4  min-h-screen flex flex-col gap-4 justify-center items-center"
      }
    >
      <SectionHeading ref={textRef} heading={"Skills"} />
      <div className="grid grid-cols-4 customBreakPoint:w-2/3 customBreakPoint:mx-auto">
        <SkillLink link={"https://html.spec.whatwg.org/"}>
          <img
            ref={imgRef1}
            className="opacity-0 transition-opacity duration-500 delay-200"
            src={darkMode ? htmlLogo : htmlLogoDark}
            alt="HTML language logo."
          />
        </SkillLink>
        <SkillLink link={"https://www.w3.org/Style/CSS/Overview.en.html"}>
          <img
            ref={imgRef2}
            className="opacity-0 transition-opacity duration-500 delay-300"
            src={darkMode ? cssLogo : cssLogoDark}
            alt="CSS language logo."
          />
        </SkillLink>
        <SkillLink
          link={
            "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
          }
        >
          <img
            ref={imgRef3}
            className="opacity-0 transition-opacity duration-500 delay-[400ms]"
            src={darkMode ? jsLogo : jsLogoDark}
            alt="Javascript language logo."
          />
        </SkillLink>
        <SkillLink link={"https://www.typescriptlang.org/"}>
          <img
            ref={imgRef4}
            className="opacity-0 transition-opacity duration-500 delay-500"
            src={darkMode ? typescriptLogo : typescriptLogoDark}
            alt="Typescript language logo."
          />
        </SkillLink>
        <SkillLink link={"https://react.dev/"}>
          <img
            ref={imgRef5}
            className="opacity-0 transition-opacity duration-500 delay-[600ms]"
            src={darkMode ? reactLogo : reactLogoDark}
            alt="React library logo."
          />
        </SkillLink>
        <SkillLink link={"https://reactrouter.com/en/main"}>
          <img
            ref={imgRef6}
            className="opacity-0 transition-opacity duration-500 delay-700"
            src={darkMode ? reactRouterLogo : reactRouterLogoDark}
            alt="React Router logo."
          />
        </SkillLink>
        <SkillLink link={"https://tailwindcss.com/"}>
          <img
            ref={imgRef7}
            className="opacity-0 transition-opacity duration-500 delay-[800ms]"
            src={darkMode ? tailwindLogo : tailwindLogoDark}
            alt="Tailwind CSS framework logo."
          />
        </SkillLink>
        <SkillLink link={"https://firebase.google.com/"}>
          <img
            ref={imgRef8}
            className="opacity-0 transition-opacity duration-500 delay-[900ms]"
            src={darkMode ? firebaseLogo : firebaseLogoDark}
            alt="Firebase app development platform logo."
          />
        </SkillLink>
        <SkillLink link={"https://threejs.org/"}>
          <img
            ref={imgRef9}
            className="opacity-0 transition-opacity duration-500 delay-1000"
            src={darkMode ? threejsLogo : threejsLogoDark}
            alt="Three.js Javascript 3D library logo."
          />
        </SkillLink>
        <SkillLink link={"https://www.blender.org/"}>
          <img
            ref={imgRef10}
            className="opacity-0 transition-opacity duration-500 delay-[1100ms]"
            src={darkMode ? blenderLogo : blenderLogoDark}
            alt="Blender 3D creation suite logo."
          />
        </SkillLink>
      </div>
    </Section>
  );
};

export default Skills;
