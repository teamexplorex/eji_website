import classes from "./Footer.module.css";
import { useRouter } from "next/navigation"

const Footer = () => {
  const router = useRouter();

  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <div>
          <img src="/logo_white.svg" className={classes.logo} />
          <p>
            Explore the world with ease and confidence. We Offer curated travel
            experiences that go beyond the ordinary. Let us handle the details,
            so you can focus on creating memories
          </p>
          <span>Our Social Links:</span>{" "}
          <div className={classes.socialIcons}>
            <span>
              <img src="/icons/facebook.svg" className={classes.socialIcon} />
            </span>
            <span>
              <img src="/icons/twitter.svg" className={classes.socialIcon} />
            </span>

            <span>
              <img src="/icons/insta.svg" className={classes.socialIcon} />
            </span>
          </div>
        </div>
        <ul>
          <li>Quick Links</li>
          <li onClick={()=>router.push("/about")}>About Us</li>
          <li onClick={()=>router.push("/faq")}>FAQ's</li>
          <li onClick={()=>router.push("/careers")}>Career</li>
          <li onClick={()=>router.push("/privacy-policy")}>Privacy Policy</li>
          <li onClick={()=>router.push("/terms-and-conditions")}>Terms and Conditions</li>
        </ul>
        <ul>
          <li>Services</li>
          <li onClick={()=>router.push("/blogs")}>Blogs</li>
          <li onClick={()=>router.push("/packages")}>Packages</li>
          <li onClick={()=>router.push("https://planngo.travel/")}>Flights</li>
          <li onClick={()=>router.push("https://planngo.travel/")}>Hotels</li>
          <li onClick={()=>router.push("https://planngo.travel/")}>Visa</li>
        </ul>
        <ul className={classes.map}>
          <li>Contact Us</li>
          <li>
            EJI Travel Solutions <br /> SF-11, Ansal Fortune Arcade, K Block,
            K-27, Sector <br /> 18, Noida, Uttar Pradesh 201301
          </li>
          <iframe
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799143587!2d-74.25986668722906!3d40.697670064598236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5a7b0b1b5%3A0x60d6cb5d16b98a25!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633178043708!5m2!1sen!2s"
          ></iframe>
        </ul>
      </div>
      <div>
        <hr />
        <p className={classes.copyright}>
          © 2024 EJI Travel Solution. All Rights Reserved. Developed by
          TheExplorex.
        </p>
      </div>
    </div>
  );
};

export default Footer;
