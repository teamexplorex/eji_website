import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <div>
          <h1>
            Explore the World: Your Guide to <br /> Unforgettable Travel
            Adventures
          </h1>
          <p>
            Discover hidden gems, travel tips, and unforgettable journeys that
            will inspire your next adventure. Whether you're seeking thrilling
            experiences or serene escapes, our blog brings the world to your
            fingertips.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
