import Button from "../../ui/Button";
import classes from "./CostAndValidity.module.css";

const CostAndValidity = () => {
  return (
    <div className={classes.costAndValidityContainer}>
      <div>
        <div>
          <h2>Cost </h2>
          <p>₹63,817/ per person</p>
        </div>
        <div>
          <h2>Tour Validity </h2>
          <p>Oct-Mar</p>
        </div>
        <div>
          <Button text="Get A Callback" src="/icons/call.svg" />
          <Button text="Inquire Now" src="/icons/inquire.svg" />
        </div>
      </div>
    </div>
  );
};

export default CostAndValidity;
