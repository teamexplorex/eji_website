import Header from "../components/homepage/Header";
import Experiences from "../components/homepage/Experiences";
import Packages from "../components/homepage/Packages";
import Wonders from "../components/homepage/Wonders";
import PromotionalPackageContent from "../components/homepage/PromotionalPackageContent";
import Testimonials from "../components/homepage/Testimonials";
import Blogs from "../components/homepage/Blogs";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import StickyButtons from "../components/homepage/StickyButtons";

const HomePage = () => {
  return (
    <>
      <Header />
      <Experiences />
      <Packages />
      <Wonders />
      <Packages />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      >
        <PromotionalPackageContent />
      </div>
      <Packages />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      >
        <PromotionalPackageContent />
      </div>
      <Packages />
      <Testimonials />
      <WhyChooseUs />
      <div
        className="parallax"
        style={{ backgroundImage: `url('/home_banner.svg')` }}
      > <PromotionalPackageContent /></div>
      <Blogs />
      <StickyButtons/>
    </>
  );
};

export default HomePage;
