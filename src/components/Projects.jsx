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
import obstacleCourseGame from "/assets/obstacleCourseGame.png";
import githubLogo from "/logos/light/github.svg";
import githubLogoDark from "/logos/dark/github_dark.svg";
import chromeLogo from "/logos/light/chrome.svg";
import chromeLogoDark from "/logos/dark/chrome_dark.svg";
import { useEffect, useRef } from "react";

const Projects = ({ darkMode }) => {
  const headingRef = useRef(null);
  const projectHeadingRef1 = useRef(null);
  const projectHeadingRef2 = useRef(null);
  const projectHeadingRef3 = useRef(null);
  const projectImgContainerRef1 = useRef(null);
  const projectImgContainerRef2 = useRef(null);
  const projectImgContainerRef3 = useRef(null);
  const projectLinkRef1 = useRef(null);
  const projectLinkRef2 = useRef(null);
  const projectLinkRef3 = useRef(null);
  const projectLinkRef4 = useRef(null);
  const projectLinkRef5 = useRef(null);
  const projectLinkRef6 = useRef(null);
  const paraRef1 = useRef(null);
  const paraRef2 = useRef(null);
  const paraRef3 = useRef(null);
  const paraRef4 = useRef(null);
  const paraRef5 = useRef(null);
  const paraRef6 = useRef(null);
  const paraRef7 = useRef(null);
  const paraRef8 = useRef(null);
  const paraRef9 = useRef(null);
  const paraRef10 = useRef(null);
  const paraRef11 = useRef(null);
  const paraRef12 = useRef(null);
  const paraRef13 = useRef(null);
  const paraRef14 = useRef(null);
  const paraRef15 = useRef(null);
  const paraRef16 = useRef(null);

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
      projectHeadingRef3,
      projectImgContainerRef1,
      projectImgContainerRef2,
      projectImgContainerRef3,
      projectLinkRef1,
      projectLinkRef2,
      projectLinkRef3,
      projectLinkRef4,
      projectLinkRef5,
      projectLinkRef6,
      paraRef1,
      paraRef2,
      paraRef3,
      paraRef4,
      paraRef5,
      paraRef6,
      paraRef7,
      paraRef8,
      paraRef9,
      paraRef10,
      paraRef11,
      paraRef12,
      paraRef13,
      paraRef14,
      paraRef15,
      paraRef16,
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
                open the laptop. This is achieved by means of the{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://github.com/pmndrs/leva"
                  target="_blank"
                  rel="noreferrer"
                >
                  leva
                </a>{" "}
                graphical user interface.
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
              <p
                ref={paraRef5}
                className="w-full opacity-0 transition-opacity duration-500 delay-700 ease-in"
              >
                The main challenge I faced while developing this project was
                dealing with a scene comprising of more complex models,
                especially when it comes to uv unwrapping and baking in Blender.
                I also had to strike a balance between the desired looks and a
                relatively small file size.
              </p>
              <p
                ref={paraRef6}
                className="w-full opacity-0 transition-opacity duration-500 delay-[800ms] ease-in"
              >
                The solution I came up with was to split the scene into smaller
                parts, create textures for these parts and then bring them all
                together when rendering the scene.
              </p>
              <ProjectLinksContainer>
                <ProjectLink link={"https://github.com/OndraSvec/3D-portfolio"}>
                  <img
                    ref={projectLinkRef1}
                    className="opacity-0 transition-opacity duration-500 delay-[900ms] ease-in"
                    src={darkMode ? githubLogo : githubLogoDark}
                    alt="Github logo."
                  />
                </ProjectLink>
                <ProjectLink link={"https://ondrasvec.dev"}>
                  <img
                    ref={projectLinkRef2}
                    className="opacity-0 transition-opacity duration-500 delay-[1000ms] ease-in"
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
                ref={paraRef7}
                className="w-full opacity-0 transition-opacity duration-500 delay-300 ease-in"
              >
                Friendstagram is a web-based recreation of the popular social
                media app.
              </p>
              <p
                ref={paraRef8}
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
                ref={paraRef9}
                className="w-full opacity-0 transition-opacity duration-500 delay-500 ease-in"
              >
                Namely, it allowed me to dive deeper into Typescript and React
                Router. Moreover, while working on the chat part of the app with
                the aim of assuring data privacy, I practised data structuring
                and implementing security rules in Firebase.
              </p>
              <p
                ref={paraRef10}
                className="w-full opacity-0 transition-opacity duration-500 delay-[600ms] ease-in"
              >
                There were two big challenges I had to cope with while working
                on this project; keeping chat messages private while
                communicating certain chat information to the{" "}
                <em>chat overview</em> page of the app and implementing a custom
                search function whilst limiting database reads.
              </p>
              <p
                ref={paraRef11}
                className="w-full opacity-0 transition-opacity duration-500 delay-700 ease-in"
              >
                As for chat message privacy, I utilised the
                collection-item-subcollection pattern with all private data
                being stored in the subcollection, which can only be read and
                updated by the users concerned. Regarding the search
                functionality, the app assigns post-description-derived tags to
                each post that are then used as keywords to filter through the
                entire post collection of the app{"'"}s database. To limit
                database reads, I used the <em>useEffect</em> React hook
                together with <em>setTimeout</em> to only read the database once
                the user has stopped typing for half a second.
              </p>
              <ProjectLinksContainer>
                <ProjectLink
                  link={"https://github.com/OndraSvec/friendstagram"}
                >
                  <img
                    ref={projectLinkRef3}
                    className="opacity-0 transition-opacity duration-500 delay-[800ms] ease-in"
                    src={darkMode ? githubLogo : githubLogoDark}
                    alt="Github logo."
                  />
                </ProjectLink>
                <ProjectLink link={"https://friendstagram-fe98d.web.app/"}>
                  <img
                    ref={projectLinkRef4}
                    className="opacity-0 transition-opacity duration-500 delay-[900ms] ease-in"
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
          <ProjectContainer>
            <ProjectTextContainer
              ref={projectHeadingRef3}
              heading={"Obstacle Course Game"}
            >
              <p
                ref={paraRef12}
                className="w-full opacity-0 transition-opacity duration-500 delay-300 ease-in"
              >
                Drawing inspiration from{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://threejs-journey.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  three.js journey
                </a>
                {"'"}s final lesson, this project enhances the user experience
                by remaking the game landscape, including adding a variety of
                new obstacles. On top of that, the game increases in difficulty
                with each completed level and stores the user{"'"}s best score
                in local storage.
              </p>
              <p
                ref={paraRef13}
                className="w-full opacity-0 transition-opacity duration-500 delay-[400ms] ease-in"
              >
                What{"'"}s more, the project also enables players to pick an
                animated character instead of the default ball. These not only
                differ in appearance, but also in other attributes, such as
                speed offering two different game modes. Aside from that, users
                can choose whether or not they want to listen to the game{"'"}s
                background music.
              </p>
              <p
                ref={paraRef14}
                className="w-full opacity-0 transition-opacity duration-500 delay-500 ease-in"
              >
                To offer a slightly more immersive experience, the project gives
                users the option to toggle fullscreen mode. As far as
                controlling the characters is concerned, desktop users can take
                full advantage of their keyboard with mobile users being able to
                use touch screen.
              </p>
              <p
                ref={paraRef15}
                className="w-full opacity-0 transition-opacity duration-500 delay-[600ms] ease-in"
              >
                As for development tools, the project helped me discover other
                helpful instruments in building 3D experiences. Namely, the game
                is built using{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://github.com/pmndrs/react-three-rapier"
                  target="_blank"
                  rel="noreferrer"
                >
                  react-three-rapier
                </a>{" "}
                to handle game physics,{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://readyplayer.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  readyplayer.me
                </a>{" "}
                to generate characters, and{" "}
                <a
                  className="font-medium text-indigo-700 dark:text-indigo-100 hover:text-indigo-800 cursor-pointer dark:hover:text-indigo-50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-50"
                  href="https://www.mixamo.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mixamo
                </a>{" "}
                to animate them.
              </p>
              <p
                ref={paraRef16}
                className="w-full opacity-0 transition-opacity duration-500 delay-700 ease-in"
              >
                While there were no major challenges working on this project, I
                had to deal with a couple of annoying bugs. The first entailed
                making sure that hitting spacebar to jump wouldn{"'"}t also
                trigger one of the previously clicked gameplay buttons. The
                other one helped me realise the importance of writing as exact
                conditionals as possible when ensuring that the next level
                interface would only show up if all three (x, y, z) character
                coordinates were on the finish platform.
              </p>
              <ProjectLinksContainer>
                <ProjectLink
                  link={"https://github.com/OndraSvec/obstacle-course-game"}
                >
                  <img
                    ref={projectLinkRef5}
                    className="opacity-0 transition-opacity duration-500 delay-[900ms] ease-in"
                    src={darkMode ? githubLogo : githubLogoDark}
                    alt="Github logo."
                  />
                </ProjectLink>
                <ProjectLink link={"https://obstacle-course-game.vercel.app/"}>
                  <img
                    ref={projectLinkRef6}
                    className="opacity-0 transition-opacity duration-500 delay-[1000ms] ease-in"
                    src={darkMode ? chromeLogo : chromeLogoDark}
                    alt="Chrome logo."
                  />
                </ProjectLink>
              </ProjectLinksContainer>
            </ProjectTextContainer>
            <ProjectImgContainer ref={projectImgContainerRef3}>
              <ProjectImg
                src={obstacleCourseGame}
                alt="Obstacle Course Game screenshot."
              />
            </ProjectImgContainer>
          </ProjectContainer>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
