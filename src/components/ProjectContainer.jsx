const ProjectContainer = ({ flexRowReversed = false, children }) => {
  return (
    <div
      className={`flex flex-col sm:text-lg md:text-xl justify-center items-start gap-4 md:gap-6 lg:gap-8 ${
        flexRowReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectContainer;
