import classes from "./PageLayout.module.css";

const Layout = ({ children, title, src, heading, style, subheading, additionalClasses }) => {
  return (
    <div
      style={{ background: `url(${src})`, ...style }}
      className={`${classes.container} ${additionalClasses || ""}`}
    >
      {title ? <h2>{title}</h2> : <></>}
      {heading ? <h3>{heading}</h3> : <></>}
      {subheading ? <p>{subheading}</p> : <></>}
      {children}
    </div>
  );
};

export default Layout;