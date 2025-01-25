import classes from "./BlogsCard.module.css";
import { useRouter } from "next/navigation";

const BlogsCard = ({ data }) => {
  const router = useRouter();

  return (
    data && (
      <div
        className={classes.blogs_card}
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/blogs/" + data.slug)}
      >
        <img src={data.bannerImage} />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    )
  );
};

export default BlogsCard;
