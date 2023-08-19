import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const ProjectImgContainer = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full p-2 max-w-xl bg-white opacity-0 transition duration-500 delay-[800ms] ease-in"
    >
      {children}
    </div>
  );
});

export default ProjectImgContainer;
