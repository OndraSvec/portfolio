const ProjectImg = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`block w-full h-full object-contain`}
      loading="lazy"
    />
  );
};

export default ProjectImg;
