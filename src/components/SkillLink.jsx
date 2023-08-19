const SkillLink = ({ link, children }) => {
  return (
    <a
      className="hover:outline rounded-2xl hover:outline-black focus:outline focus:outline-black focus:outline-[3px] dark:focus:outline-white dark:hover:outline-white"
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      {children}
    </a>
  );
};

export default SkillLink;
