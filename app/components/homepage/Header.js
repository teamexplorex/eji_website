"use client"
import Button from "../ui/Button";
import classes from "./Header.module.css";
import HeaderForm from "./HeaderForm";
import MobileHeaderForm from "./MobileHeaderForm";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Your Journey Begins Here</h1>
        <p>
          From breathtaking landscapes to thrilling adventures, every journey
          begins with a single step. Discover destinations that inspire, and
          create memories that will last a lifetime. Your next adventure is
          waiting—let's make it unforgettable
        </p>
        <Button
          text="Explore Package"
          src="/icons/arrow-right.svg"
          onClick={() => router.push("/packages")}
          imgStyle={{ width: "1.2rem" }}
        />
      </div>
      <div className={classes.right}>
        <HeaderForm />
      </div>
      <div className={classes.mobileVersion}>
        <h1>Your Journey Begins Here !</h1>
        <MobileHeaderForm />
      </div>
    </div>
  );
};

export default Header;
