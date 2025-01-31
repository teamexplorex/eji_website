import Button from "../ui/Button";
import Layout from "../Layout/PageLayout";

import classes from "./CurrentOpenings.module.css";

const CurrentOpenings = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Carrers ;-"
        heading={"Current Openings?"}
        subheading={
          "we create experiences that spark joy, curiosity, and adventure. And behind every unforgettable journey is a team of passionate game-changers like YOU."
        }
        style={{ boxShadow: "none" }}
        src="/testimonial_banner.svg"
      >
        <div className={classes.content}>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
          <span>
            <h5>Travel Consultant</h5>
            <p>Current openings : 02</p>
            <p>Position Type : Full-Time</p>
            <p>Department: Travel Sales & Operations</p>
            <Button text={"Apply"} />
          </span>
        </div>
      </Layout>
    </div>
  );
};

export default CurrentOpenings;
