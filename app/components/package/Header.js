
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <div>
          <h1>
            Experience the <br /> Wonders of Wildlife
          </h1>
          <p>
            Join us for an unforgettable journey into nature's heart. Discover
            breathtaking landscapes and observe majestic animals in their
            natural habitat
          </p>
        </div>
      </div>
      <img src="/paper.png" className="paper"/>
    </>
  );
};

export default Header;
