import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <div>
          <h1>
            Unforgettable Experiences, <br />
            Lifelong Memories
          </h1>
          <p>
          Every moment matters. From breathtaking adventures to serene escapes, we create experiences that leave an indelible mark on your heart. Let us take you on a journey you'll cherish forever.
          </p>
        </div>
      </div>
      <img src="/paper.png" className="paper" />
    </>
  );
};

export default Header;
