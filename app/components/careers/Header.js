import Button from "../ui/Button";
import Layout from "../Layout/PageLayout";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Dream Big . Work Smart . Redefine Travel With Us :-"
        heading={"Your Ticket to an Extraordinary career Awaits"}
        subheading={
          "At EJI Travel Solutions, we don’t just plan trips — we create experiences that spark joy, curiosity, and adventure. And behind every unforgettable journey is a team of passionate game-changers like YOU. Apply now to join us in this journey"
        }
        style={{ boxShadow: "none" }}
        additionalClasses = {classes.layout}
        src="/testimonial_banner.svg"
      >
        <div className={classes.content}>
          <Button text={"Join Us"} />
          <img src="/careers/1.svg" />
        </div>
      </Layout>
    </div>
  );
};

export default Header;
