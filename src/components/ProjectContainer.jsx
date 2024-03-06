const ProjectContainer = ({ flexRowReversed = false, children }) => {
  return (
    <div
      className={`flex flex-col mb-10 sm:text-lg sm:mb-16 md:text-xl md:mb-32 justify-center items-start gap-4 md:gap-6 lg:gap-8 lg:mb-40 ${
        flexRowReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectContainer;
