import classes from "./Banner.module.css";

const AboutUsHeader = () => {
  return (
    <>
      <div className={classes.aboutUs_header}>
        <div>
          <h1>
            Its better to know , <br />
            before join us
          </h1>
          <p>
            Every moment matters. From breathtaking adventures to serene
            escapes, we create experiences that leave an indelible mark on your
            heart. Let us take you on a journey you'll cherish forever.
          </p>
        </div>
      </div>
      <img src="/paper.png" className="paper" />
    </>
  );
};

export default AboutUsHeader;
