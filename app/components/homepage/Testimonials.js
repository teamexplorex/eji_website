import Layout from "../Layout/PageLayout";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <Layout
      title="-: Traveler Stories :-"
      heading={"What Our Travelers Say ?"}
      subheading={
        "Hear firsthand experiences and heartfelt stories from our adventurers, sharing their unforgettable journeys and the moments that made their travels truly remarkable."
      }
      style={{ boxShadow: "none" }}
      src="/testimonial_banner.svg"
    >
      <div className={classes.testimonial_container}>
        <div className={classes.testimonial}>
          <h3>Don't take our word for it</h3>
          <p>
            "I had the most incredible vacation experience thanks to the amazing
            team at EJI Travel Agency! From the moment I contacted them, their
            friendly and knowledgeable staff helped me plan the perfect
            itinerary. They took care of every detail, from booking flights and
            accommodations to arranging local tours and activities."
          </p>
          <div className={classes.stars}>
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
            <img src="/icons/star.svg" alt="star" />
          </div>
          <div className={classes.profileContainer}>
            <img
              className={classes.profileImage}
              src="/icons/testimonial_person.svg"
              alt="testimonial person"
            />
          </div>
          <h4>Clarence</h4>
        </div>

        {/* Image Grid */}
        <div className={classes.parent}>
          <div
            className={classes.div1}
            style={{ background: `url("/testimonials/1.svg")` }}
          >
            {" "}
          </div>
          <div
            className={classes.div2}
            style={{ background: `url("/testimonials/3.svg")` }}
          >
            {" "}
          </div>
          <div
            className={classes.div3}
            style={{ background: `url("/testimonials/2.svg")` }}
          >
            {" "}
          </div>
          <div
            className={classes.div4}
            style={{ background: `url("/testimonials/4.svg")` }}
          >
            {" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
