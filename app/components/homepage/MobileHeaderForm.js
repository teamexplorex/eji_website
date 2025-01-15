import Button from "../ui/Button";
import classes from "./MobileHeaderForm.module.css";
import { useRouter } from "next/navigation";

const MobileHeaderForm = () => {
  const router = useRouter();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    router.push("/packages");
  };
  return (
    <form className={classes.mobileHeaderContainer} onClick={formSubmitHandler}>
      <div className={classes.input}>
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" />
        </span>

        <div className={classes.labels}>
          <span className={classes.label}>STARTING FROM</span>
          <span className={classes.text}>New Delhi</span>
        </div>
      </div>
      <div className={classes.input}>
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" />
        </span>

        <div className={classes.labels}>
          <span className={classes.label}>Travelling To</span>
          <span className={classes.text}>Goa</span>
        </div>
      </div>
      <div className={classes.inputs}>
        <div className={classes.input}>
          <span className={classes.icon}>
            <img src="/icons/location_black.svg" />
          </span>

          <div className={classes.labels}>
            <span className={classes.label}>STARTING DATE</span>
            <span className={classes.text}>Add Travel Date</span>
          </div>
        </div>
        <div className={classes.input}>
          <span className={classes.icon}>
            <img src="/icons/location_black.svg" />
          </span>

          <div className={classes.labels}>
            <span className={classes.label}>NO. OF GUESTS</span>
            <span className={classes.text}>Add Guests</span>
          </div>
        </div>
      </div>
      <Button text={"Search"} src="/icons/search.svg" />
    </form>
  );
};

export default MobileHeaderForm;
