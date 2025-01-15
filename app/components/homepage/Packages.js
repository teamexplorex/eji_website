import Layout from "../Layout/PageLayout";
import Package from "../ui/Package";
import PackageFilter from "./PackageFilter";
import classes from "./Packages.module.css";

const Packages = ({isTitle=true}) => {
  return (
    <Layout
      title={isTitle ? "-: Find Experiences :-": ""}
      heading={"Discover Destinations for Every Passion"}
      subheading={
        "Explore a diverse array of locations tailored to your interests, whether you seek adventure, relaxation, culture, or culinary delights, ensuring there's a perfect getaway for every traveler."
      }
      style={{ boxShadow: "none" }}
    >
      <div className={classes.packageContainer}>
        <PackageFilter />
        <div className={`${classes.packages} ${classes.web_packages}`}>
          <Package arrowButtons={true} />
          <Package arrowButtons={true} />
          <Package arrowButtons={true} />
        </div>
        <div className={classes.tab}>
          <div className={classes.packages}>
            <div className={classes.tab_packages1}>
              <Package arrowButtons={true} />
              <Package arrowButtons={true} />
            </div>
            <div>
              <Package arrowButtons={true} />
              <Package arrowButtons={true} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
