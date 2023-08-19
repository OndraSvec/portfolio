const NavbarLink = ({ link, onClick, text }) => {
  return (
    <a
      className="hover:text-indigo-700 cursor-pointer dark:hover:text-indigo-200 focus:outline-none focus:text-indigo-700 dark:focus:text-indigo-200"
      href={link}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default NavbarLink;
