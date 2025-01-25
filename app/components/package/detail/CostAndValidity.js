import Button from "../../ui/Button";
import classes from "./CostAndValidity.module.css";

const CostAndValidity = ({ packageData }) => {
  return (
    <div className={classes.costAndValidityContainer}>
      <div>
        <div>
          <h2>Cost </h2>
          <p>₹{packageData.actualPrice}/ per person</p>
        </div>
        <div>
          <h2>Tour Validity</h2>
          <p>
            {new Date(packageData.tourValidity.split(" - ")[0]).toLocaleString(
              "en-US",
              { month: "short" }
            )}{" "}
            -
            {new Date(packageData.tourValidity.split(" - ")[1]).toLocaleString(
              "en-US",
              { month: "short" }
            )}
          </p>
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
