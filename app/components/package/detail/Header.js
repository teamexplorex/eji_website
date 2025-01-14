import classes from "./Header.module.css";

const PackageHeader = () => {
  return (
    <>
      <div className={classes.packageheader_container}>
        <div>
          <h1>Uncover Bali: Culture, Cuisine & Coastlines</h1>
          <h2>
            (₹63,817 / <span>per person</span>)
          </h2>
        </div>
        <div>
          <span>
            <img src="/packagedetail/customizable.svg" />
            Customizable
          </span>
          |
          <span>
            <img src="/packagedetail/beach.svg" />
            2N Anjuna
          </span>
          |
          <span>
            <img src="/packagedetail/hotel.svg" />
            3N Palolem
          </span>
        </div>
      </div>
      <div className={`${classes["parent"]} ${classes["web"]}`}>
        <div
          className={classes["div1"]}
          style={{ background: `url("/packagedetail/image1.svg")` }}
        ></div>
        <div
          className={classes["div2"]}
          style={{ background: `url("/packagedetail/image2.svg")` }}
        ></div>
        <div
          className={classes["div3"]}
          style={{ background: `url("/packagedetail/image3.svg")` }}
        ></div>
        <div
          className={classes["div4"]}
          style={{ background: `url("/packagedetail/image4.svg")` }}
        ></div>
      </div>
      <div className={`${classes["mobile"]} ${classes["scrollable"]}`}>
        <img src="/packagedetail/image1.svg" />
        {/* <div style={{ background: `url("/packagedetail/image2.svg")` }}></div>
        <div style={{ background: `url("/packagedetail/image3.svg")` }}></div>
        <div style={{ background: `url("/packagedetail/image4.svg")` }}></div> */}
      </div>
    </>
  );
};

export default PackageHeader;
