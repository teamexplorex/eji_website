import classes from "./PackageItenary.module.css";

const PackageItenary = ({ packageData }) => {
  return (
    <>
      <div className={`${classes.packageItenary_container} ${classes.web}`}>
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
      <div className={classes.mobile}>
        {packageData?.packageItinerary?.map((data, index) => {
          return (
            <div key={index}>
              <div className={classes.mobile_day}>
                Day <span>{data.day}</span>
              </div>
              <div className={classes.mobile_details}>
                <div className={classes.mobile_title}>{data.title}</div>
                <div style={{ display: "flex" }}>
                  <div>
                    {data?.images?.[0] && (
                      <div
                        className={`${classes["div1"]} ${classes.mobile_image}`}
                        style={{
                          background: `url("${data?.images?.[0]}")`,
                        }}
                      ></div>
                    )}
                  </div>
                  <div
                    style={{
                      paddingLeft: data?.images?.[0] ? "1rem" : "0rem",
                      paddingTop: "1rem"
                    }}
                  >
                    <span className={classes.reachFromYourOwn}>Note: You need to reach Goa on your own.</span>
                    <div className={classes.mobile_description}>
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PackageItenary;
