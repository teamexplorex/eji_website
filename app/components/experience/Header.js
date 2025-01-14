import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <video autoPlay muted loop className={classes.video_background}>
          <source src="/experience_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.content}>
          <h1>
            Explore the Beauty <br /> of the Coast
          </h1>
          <p>
            Let us help you plan your ideal beach vacation. Experience
            relaxation, adventure, and unforgettable memories under the sun  Let us help you plan your ideal beach vacation. Experience
            relaxation, adventure, and unforgettable memories under the sun
          </p>
        </div>
      </div>
      <img src="/paper.png" className="paper" />
    </>
  );
};

export default Header;
