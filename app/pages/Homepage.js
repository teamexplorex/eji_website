import Header from "../components/homepage/Header";
import Experiences from "../components/homepage/Experiences";
import Packages from "../components/homepage/Packages";
import Wonders from "../components/homepage/Wonders";
import PromotionalPackageContent from "../components/homepage/PromotionalPackageContent";
import Testimonials from "../components/homepage/Testimonials";
import Blogs from "../components/homepage/Blogs";
import WhyChooseUs from "../components/homepage/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <Experiences />
      <Packages
        title="-: Top Trending Destinations :-"
        heading="Explore the World's Most Popular Spots"
        subheading={
          "Experience the charm of world-renowned destinations and uncover hidden gems that offer unmatched beauty and adventure. From iconic landmarks to serene escapes, these trending locations promise unforgettable journeys and timeless memories."
        }
        isFilterShown={true}
      />
      <Wonders />
      <Packages
        title="-: Once-in-a-Year Events You Can't Miss :-"
        heading="Experience the Magic of Once-in-a-Lifetime Moments"
        subheading={
          "Discover vibrant festival and event packages, from India's colorful Holi and grand Diwali to Japan's Cherry Blossom Festival and Germany's Oktoberfest. Don't miss these once-a-year celebrations—book now for unforgettable memories!"
        }
        isFilterShown={false}
      />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      >
        <PromotionalPackageContent />
      </div>

      <Packages
        title="-: Your Dream Vacation at the Best Price :-"
        heading="Unbeatable Offers for Your Next Adventure"
        subheading={
          "Grab the best travel deals that you simply can't ignore. From luxurious getaways to budget-friendly escapes, these offers are designed to make your dream trips affordable and unforgettable. Don't wait—seize these limited-time deals and start planning your next adventure today!"
        }
        isFilterShown={false}
      />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      >
        <PromotionalPackageContent />
      </div>
      <Packages
        title="-: Explore the Beauty of India :-"
        heading="Uncover the Wonders of Incredible India"
        subheading={
          "Discover India's diverse landscapes, rich heritage, and vibrant culture. From Kerala's serene backwaters to the majestic Himalayas, Rajasthan's royal palaces to Goa's sunny beaches, embark on a journey through unforgettable experiences in this incredible land."
        }
        isFilterShown={true}
      />
      <Testimonials />
      <WhyChooseUs />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      >
        {" "}
        <PromotionalPackageContent />
      </div>
      <Blogs />
    </>
  );
};

export default HomePage;
