"use client";
import classes from "./BlogsCard.module.css";
import { useRouter } from "next/navigation";

const BlogsCard = () => {
  const router = useRouter();

  return (
    <div className={classes.blogs_card} style={{ cursor: "pointer" }} onClick={()=>router.push("/blogs/dsafasd")}>
      <img src="/blogs_card.svg" />
      <h3>Discover Hidden Gems Around the World</h3>
      <p>
        Embark on a journey through our latest travel stories, tips, and
        destination guides. Discover hidden gems, cultural experiences, and
        must-visit places that will inspire your next adventure. Whether you're
        planning a quick getaway or a long vacation, our blog has you covered
        Whether you're planning a quick getaway or a long vacation, our blog has
        you covered Whether you're planning a quick getaway or a long vacation,
        our blog has you covered Read More
      </p>
    </div>
  );
};

export default BlogsCard;
