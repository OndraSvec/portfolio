const Wrapper = ({ darkMode, children }) => {
  return (
    <div className={`w-full ${darkMode && "dark"}`}>
      <div className="dark:bg-indigo-950 w-full flex justify-center">
        <div className="max-w-7xl w-full">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
