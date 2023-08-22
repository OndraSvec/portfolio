import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectContainer from "./ProjectContainer";
import ProjectTextContainer from "./ProjectTextContainer";
import ProjectLinksContainer from "./ProjectLinksContainer";
import ProjectLink from "./ProjectLink";
import ProjectImgContainer from "./ProjectImgContainer";
import ProjectImg from "./ProjectImg";
import portfolio3D from "/assets/portfolio_3D.png";
import friendstagramImage from "/assets/friendstagram.png";
import githubLogo from "/logos/light/github.svg";
import githubLogoDark from "/logos/dark/github_dark.svg";
import chromeLogo from "/logos/light/chrome.svg";
import chromeLogoDark from "/logos/dark/chrome_dark.svg";
import { useEffect, useRef } from "react";

const Projects = ({ darkMode }) => {
  const headingRef = useRef(null);
  const projectHeadingRef1 = useRef(null);
  const projectHeadingRef2 = useRef(null);
  const projectImgContainerRef1 = useRef(null);
  const projectImgContainerRef2 = useRef(null);
  const projectLinkRef1 = useRef(null);
  const projectLinkRef2 = useRef(null);
  const projectLinkRef3 = useRef(null);
  const projectLinkRef4 = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);
  const paraRef3 = useRef(null);
  const paraRef4 = useRef(null);
  const paraRef5 = useRef(null);
  const paraRef6 = useRef(null);
  const paraRef7 = useRef(null);

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
      headingRef,
      projectHeadingRef1,
      projectHeadingRef2,
      projectImgContainerRef1,
      projectImgContainerRef2,
      projectLinkRef1,
      projectLinkRef2,
      projectLinkRef3,
      projectLinkRef4,
      paraRef1,
      paraRef2,
      paraRef3,
      paraRef4,
      paraRef5,
      paraRef6,
      paraRef7,
    ].forEach((element) => observer.observe(element.current));
  }, []);
  return (
    <Section
      id={"projects"}
      className={
        "scroll-mt-20 text-indigo-500 px-4  min-h-screen flex flex-col justify-center items-center dark:text-indigo-200"
      }
    >
      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full">
        <SectionHeading ref={headingRef} heading={"Projects"} />
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          <ProjectContainer>
            <ProjectTextContainer
              ref={projectHeadingRef1}
              heading={"3D Portfolio"}
            >
              <p
                ref={paraRef1}
                className="w-full opacity-0 transition-opacity duration-500 delay-300 ease-in"
              >
                Are you finding this portfolio a bit... plain? Well, why don
                {"'"}t you check out the 3D version?
              </p>
              <p
                ref={paraRef2}
                className="w-full opacity-0 transition-opacity duration-500 delay-[400ms] ease-in"
              >
                This project builds upon{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://threejs-journey.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  three.js journey
                </a>
                {"'"}s lessons. To be more exact, it takes Bruno Simon{"'"}s
                idea of displaying the actual portfolio on the screen of a 3D
                laptop model and adds the entire room around it. The room itself
                is made inside Blender and uses techniques such as baking to
                render a crisp looking scene.
              </p>
              <p
                ref={paraRef3}
                className="w-full opacity-0 transition-opacity duration-500 delay-500 ease-in"
              >
                Furthermore, the scene responds to user interaction, as it
                allows visitors to zoom in/out to better focus either on the
                screen or the entire scene. The same interaction is also used to
                open the laptop. To avoid conflicts between <em>click</em> and{" "}
                <em>doubleClick</em> events and allow for a seamless
                mobile/desktop experience, the app implements a custom{" "}
                <em>doubleTap</em> event handler.
              </p>
              <p
                ref={paraRef4}
                className="w-full opacity-0 transition-opacity duration-500 delay-[600ms] ease-in"
              >
                Using{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                  target="_blank"
                  rel="noreferrer"
                >
                  React-three-fiber
                </a>
                , the project allowed me to gain a deeper understanding of and
                combine two of my favourite technologies: React and three.js.
              </p>
              <ProjectLinksContainer>
                <ProjectLink link={"https://github.com/OndraSvec/3D-portfolio"}>
                  <img
                    ref={projectLinkRef1}
                    className="opacity-0 transition-opacity duration-500 delay-700 ease-in"
                    src={darkMode ? githubLogo : githubLogoDark}
                    alt="Github logo."
                  />
                </ProjectLink>
                <ProjectLink link={"https://ondrasvec.dev"}>
                  <img
                    ref={projectLinkRef2}
                    className="opacity-0 transition-opacity duration-500 delay-[800ms] ease-in"
                    src={darkMode ? chromeLogo : chromeLogoDark}
                    alt="Chrome logo."
                  />
                </ProjectLink>
              </ProjectLinksContainer>
            </ProjectTextContainer>
            <ProjectImgContainer ref={projectImgContainerRef1}>
              <ProjectImg src={portfolio3D} alt="3D portfolio screenshot." />
            </ProjectImgContainer>
          </ProjectContainer>
          <ProjectContainer flexRowReversed>
            <ProjectTextContainer
              ref={projectHeadingRef2}
              heading={"Friendstagram"}
            >
              <p
                ref={paraRef5}
                className="w-full opacity-0 transition-opacity duration-500 delay-300 ease-in"
              >
                Friendstagram is a web-based recreation of the popular social
                media app.
              </p>
              <p
                ref={paraRef6}
                className="w-full opacity-0 transition-opacity duration-500 delay-[400ms] ease-in"
              >
                It is inspired by{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://www.theodinproject.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  the Odin Project
                </a>
                {"'"}s curriculum. While developing the project, I had the
                opportunity to solidify all the front-end development skills I
                had acquired by following the aforementioned course.
              </p>
              <p
                ref={paraRef7}
                className="w-full opacity-0 transition-opacity duration-500 delay-500 ease-in"
              >
                Namely, it allowed me to dive deeper into Typescript and React
                Router. Moreover, while working on the chat part of the app with
                the aim of assuring data privacy, I practised data structuring
                and implementing security rules in Firebase.
              </p>
              <ProjectLinksContainer>
                <ProjectLink
                  link={"https://github.com/OndraSvec/friendstagram"}
                >
                  <img
                    ref={projectLinkRef3}
                    className="opacity-0 transition-opacity duration-500 delay-[600ms] ease-in"
                    src={darkMode ? githubLogo : githubLogoDark}
                    alt="Github logo."
                  />
                </ProjectLink>
                <ProjectLink link={"https://friendstagram-fe98d.web.app/"}>
                  <img
                    ref={projectLinkRef4}
                    className="opacity-0 transition-opacity duration-500 delay-700 ease-in"
                    src={darkMode ? chromeLogo : chromeLogoDark}
                    alt="Chrome logo."
                  />
                </ProjectLink>
              </ProjectLinksContainer>
            </ProjectTextContainer>
            <ProjectImgContainer ref={projectImgContainerRef2}>
              <ProjectImg
                src={friendstagramImage}
                alt="Frienstagram app screenshot."
              />
            </ProjectImgContainer>
          </ProjectContainer>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
