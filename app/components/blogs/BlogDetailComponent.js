import classes from "./BlogDetailComponent.module.css";

const BlogDetailComponent = () => {
  return (
    <div className={classes.blogDetail}>
      <div className={classes.blogs_card}>
        <p
          style={{
            color: "var(--color-green)",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
          className={classes.publishedText}
        >
          Published by EJI Travels // Oct 24, 2024 // 03:37 PM
        </p>
        <h1>Wander Through Untouched Natural Landscapes</h1>
        <p>
          Traveling is more than just moving from one place to another; it’s an
          art, an experience that touches the soul and broadens the mind.
          Whether you’re exploring bustling cities, serene beaches, towering
          mountains, or hidden villages, every journey offers its own unique
          story. For many, travel is a way to escape the ordinary, to dive into
          the unknown and come back with a newfound perspective on life. It
          offers a fresh lens through which we can see the world and understand
          its incredible diversity.
        </p>
        <img src="/blogs_card.svg" />
        <h2>Discover Hidden Gems Around the World</h2>
        <p>
          Traveling is more than just moving from one place to another; it’s an
          art, an experience that touches the soul and broadens the mind.
          Whether you’re exploring bustling cities, serene beaches, towering
          mountains, or hidden villages, every journey offers its own unique
          story. For many, travel is a way to escape the ordinary, to dive into
          the unknown and come back with a newfound perspective on life. It
          offers a fresh lens through which we can see the world and understand
          its incredible diversity.Traveling is more than just moving from one
          place to another; it’s an art, an experience that touches the soul and
          broadens the mind. Whether you’re exploring bustling cities, serene
          beaches, towering mountains, or hidden villages, every journey offers
          its own unique story. For many, travel is a way to escape the
          ordinary, to dive into the unknown and come back with a newfound
          perspective on life. It offers a fresh lens through which we can see
          the world and understand its incredible diversity.
        </p>
        <h2>Cultural Connections</h2>
        <p>
          Traveling is more than just moving from one place to another; it’s an
          art, an experience that touches the soul and broadens the mind.
          ‘’Whether you’re exploring bustling cities, serene beaches, towering
          mountains, or hidden villages, every journey offers its own unique
          story. For many, travel is a way to escape the ordinary, to dive into
          the unknown and come back with a newfound perspective on life.’’ It
          offers a fresh lens through which we can see the world and understand
          its incredible diversity.
        </p>
        <h2>Culinary Delights</h2>
        <p>
          Food is another essential part of the travel experience. Every
          country, and often every city, has its own culinary identity, shaped
          by centuries of tradition and influenced by local ingredients. From
          savoring street food in Southeast Asia to enjoying a fine dining
          experience in Paris, every meal becomes an opportunity to connect with
          the heart and soul of a destination. Trying regional dishes allows you
          to taste the essence of a place, while cooking classes or market tours
          offer a deeper understanding of its food culture. The flavors you
          encounter often become lasting memories, evoking the spirit of the
          places you've visited long after you've returned home.
        </p>
        <img src="/blogs_card.svg" />
        <h2>Traveling Responsibly</h2>
        <p>
          As travelers, it’s important to respect the places we visit and the
          people who call them home. Responsible travel has become a growing
          focus in recent years, emphasizing sustainability and community
          engagement. This means being mindful of the environment, supporting
          local businesses, and leaving a minimal footprint wherever you go.
          Whether it's by reducing waste, choosing eco-friendly accommodations,
          or participating in cultural experiences that benefit local
          communities, every traveler can play a part in preserving the beauty
          and integrity of the places they explore.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailComponent;
