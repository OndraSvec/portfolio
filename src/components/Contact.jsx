import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";
import githubLogo from "/logos/light/github.svg";
import githubLogoDark from "/logos/dark/github_dark.svg";
import linkedinLogo from "/logos/light/linkedin.svg";
import linkedinLogoDark from "/logos/dark/linkedin_dark.svg";
import emailLogo from "/logos/light/email.svg";
import emailLogoDark from "/logos/dark/email_dark.svg";
import { useEffect, useRef } from "react";

const Contact = ({ darkMode }) => {
  const headingRef = useRef(null);
  const textRef1 = useRef(null);
  const contactRef2 = useRef(null);
  const contactRef3 = useRef(null);
  const contactRef1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        }
      });
    });
    [headingRef, textRef1, contactRef1, contactRef2, contactRef3].forEach(
      (element) => observer.observe(element.current),
    );
  }, []);
  return (
    <Section
      id={"contact"}
      className={
        "px-4 min-h-screen flex flex-col gap-4 justify-center items-center"
      }
    >
      <SectionHeading ref={headingRef} heading={"Contact"} />
      <p
        ref={textRef1}
        className="opacity-0 transition-opacity duration-500 delay-200 w-full max-w-3xl text-center text-indigo-500 text-lg sm:text-xl md:text-2xl lg:text-3xl dark:text-indigo-200 customBreakPoint:text-2xl"
      >
        Thanks again for taking the time to look at my portfolio. If you liked
        it, let{"'"}s link up! You can find me on Linkedin, see my other
        repositories on Github or maybe send me an email.
      </p>
      <div className="grid grid-cols-3 mt-10 customBreakPoint:w-1/2 customBreakPoint:mx-auto">
        <ContactLink link={"https://www.linkedin.com/in/ondrasvecdev/"}>
          <img
            ref={contactRef1}
            className="opacity-0 transition-opacity duration-500 delay-300"
            src={darkMode ? linkedinLogo : linkedinLogoDark}
            alt="HTML language logo."
          />
        </ContactLink>
        <ContactLink link={"https://github.com/OndraSvec"}>
          <img
            ref={contactRef2}
            className="opacity-0 transition-opacity duration-500 delay-[400ms]"
            src={darkMode ? githubLogo : githubLogoDark}
            alt="HTML language logo."
          />
        </ContactLink>
        <ContactLink link={"mailto:ondrasvecdev@gmail.com"}>
          <img
            ref={contactRef3}
            className="opacity-0 transition-opacity duration-500 delay-500"
            src={darkMode ? emailLogo : emailLogoDark}
            alt="HTML language logo."
          />
        </ContactLink>
      </div>
    </Section>
  );
};

export default Contact;
