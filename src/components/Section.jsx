const Section = ({ className, id, children }) => {
  return (
    <section id={id} className={`w-full dark:bg-indigo-950 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
