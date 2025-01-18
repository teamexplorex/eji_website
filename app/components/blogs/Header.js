import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <div>
          <h1>
            Journey Awaits: Stories to Inspire Your <br />
            Next Adventure
          </h1>
          <p>
            Your passport to insider secrets, hidden gems, and travel
            inspiration. Explore luxurious escapes, thrilling adventures, and
            tips to craft journeys that you'll treasure forever.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
