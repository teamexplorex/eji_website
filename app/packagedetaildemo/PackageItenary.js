import classes from "./PackageItenary.module.css";

const PackageItenary = ({ packageData }) => {
  return (
    <div className={classes.packageItenary_container}>
      {packageData?.packageItinerary?.map((data, index) => {
        return (
          <div key={index}>
            <div className={classes.day}>
              Day <span>{data.day}</span>
            </div>
            <div className={classes.shape}>
              <div>
                <h1>{data.title}</h1>
                <span>Note: You need to reach Goa on your own.</span>
                <div>{data.description}</div>
              </div>

              {data.images.length > 0 && (
                <div>
                  <div className={classes["parent"]}>
                    {data?.images?.[0] && (
                      <div
                        className={classes["div1"]}
                        style={{
                          background: `url("${data?.images?.[0]}")`,
                        }}
                      ></div>
                    )}
                    {data?.images?.[1] && (
                      <div
                        className={classes["div2"]}
                        style={{
                          background: `url("${data?.images?.[1]}")`,
                        }}
                      ></div>
                    )}
                    {data?.images?.[2] && (
                      <div
                        className={classes["div3"]}
                        style={{
                          background: `url("${data?.images?.[2]}")`,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageItenary;
