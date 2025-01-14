import classes from "./FoodHeader.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.package_header}>
        <div>
          <h1>
            Celebrate the World's Vibrant <br /> Festivals: Your Passport to
            Culture
          </h1>
          <p>
            Embrace the spirit of the world’s legendary gatherings. Uncover
            age-old rituals, revel in unforgettable performances, and connect
            with diverse traditions from around the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
