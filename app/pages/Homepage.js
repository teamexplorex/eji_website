import Header from "../components/homepage/Header";
import Experiences from "../components/homepage/Experiences";
import Packages from "../components/homepage/Packages";
import Wonders from "../components/homepage/Wonders";
import PromotionalPackageContent from "../components/homepage/PromotionalPackageContent";
import Testimonials from "../components/homepage/Testimonials";
import Blogs from "../components/homepage/Blogs";
import WhyChooseUs from "../components/homepage/WhyChooseUs";

const HomePage = ({
  blogs,
  exploreTheWorldPackages,
  onceInAYearEventPackages,
  dreamVacationPackages,
  beautyOfIndiaPackages,
}) => {
  return (
    <>
      <Header />
      <Experiences />
      <Packages
        title="-: Explore the World :-"
        heading="Top Trending Destinations for Your Next Adventure"
        subheading={
          "From exotic beaches to vibrant cities and serene mountain retreats, these destinations are gaining popularity among travelers worldwide. Whether you're seeking adventure, culture, luxury, or relaxation, our carefully selected trending spots offer something for everyone. Discover hidden gems and must-see locations that are shaping the future of travel."
        }
        isFilterShown={true}
        data={exploreTheWorldPackages}
      />
      <Wonders />
      <Packages
        title="-: Once-in-a-Year Events You Can't Miss :-"
        heading="Experience the Magic of Once-in-a-Lifetime Moments"
        subheading={
          "Immerse yourself in global culture with our Global Travel Festivals collection. From the vibrant Rio Carnival in Brazil to the enchanting lantern festivals of Vietnam, and from Spain's La Tomatina to India's Diwali and Germany's Oktoberfest, these celebrations offer a once-in-a-lifetime opportunity to experience the world's most exciting and colorful events."
        }
        isFilterShown={false}
        data={onceInAYearEventPackages}
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
        data={dreamVacationPackages}
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
          "From the majestic forts of Rajasthan to the serene backwaters of Kerala, the spiritual heart of Varanasi to the bustling streets of Delhi, our expertly crafted itineraries offer a deep dive into the beauty and charm of India. Discover iconic landmarks, hidden gems, and authentic local experiences that will leave you with lasting memories."
        }
        data={beautyOfIndiaPackages}
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
      <Blogs blogs={blogs} />
    </>
  );
};

export default HomePage;
