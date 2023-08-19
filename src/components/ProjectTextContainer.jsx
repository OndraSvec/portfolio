import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const ProjectTextContainer = forwardRef(({ heading, children }, ref) => {
  return (
    <div className="w-full max-w-xl flex flex-col sm:text-lg md:text-xl items-center gap-4 dark:text-indigo-200 text-indigo-500">
      <h3
        ref={ref}
        className="opacity-0 transition-opacity duration-500 delay-200 ease-in text-indigo-700 text-lg sm:text-xl md:text-2xl dark:text-indigo-400"
      >
        {heading}
      </h3>
      {children}
    </div>
  );
});

export default ProjectTextContainer;
