import Layout from "../Layout/PageLayout";
import Package from "../ui/Package";
import PackageFilter from "./PackageFilter";
import classes from "./Packages.module.css";

const Packages = ({
  isTitle = true,
  title,
  heading,
  subheading,
  isFilterShown,
}) => {
  return (
    <Layout
      title={isTitle ? title : ""}
      heading={heading}
      subheading={subheading}
      style={{ boxShadow: "none" }}
    >
      <div className={classes.packageContainer}>
        {isFilterShown ? <PackageFilter /> : <></>}
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
