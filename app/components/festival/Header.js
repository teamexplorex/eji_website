"use client"

import { useState } from "react";
import classes from "./Header.module.css";

const HeaderFestival = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div
      className={classes.package_header}
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
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
  );
};

export default HeaderFestival;
