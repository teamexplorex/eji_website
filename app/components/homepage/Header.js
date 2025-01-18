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
        Embark on a journey of a lifetime. From uncovering hidden treasures to exploring iconic destinations, every moment is crafted to inspire. Create memories that stay with you forever—your adventure begins now.
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
