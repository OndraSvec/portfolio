import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const SectionHeading = forwardRef(({ heading }, ref) => {
  return (
    <h2
      ref={ref}
      className="opacity-0 transition-opacity duration-500 delay-100 ease-in text-2xl text-indigo-700 font-medium sm:text-3xl md:text-4xl dark:text-indigo-400"
    >
      {heading}
    </h2>
  );
});

export default SectionHeading;
