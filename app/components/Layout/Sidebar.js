import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Sidebar.module.css";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <h3>Packages For You</h3>
        <img
          src="/icons/cross.svg"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
      </div>
      <ul className={classes.sidebarList}>
        <li>
          <Link href="/bestseller-packages">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Bestseller Packages
          </Link>
        </li>
        <li>
          <Link href="/honeymoon-packages">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Honeymoon Packages
          </Link>
        </li>
        <li>
          <Link href="/family-trips">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Family Trips
          </Link>
        </li>
        <li>
          <Link href="/trending-trips">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Trending Trips
          </Link>
        </li>
        <li>
          <Link href="/trips-on-offer">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Trips on Offer
          </Link>
        </li>
        <li>
          <Link href="/cultural-heritage-trips">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Cultural Heritage Trips
          </Link>
        </li>
        <li>
          <Link href="/winter-packages">
            {" "}
            <img src="/icons/right_arrow.svg" className={classes.icon} />
            Winter Packages
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
