import classes from "./Button.module.css";

const Button = ({ text, src, style, imgStyle, onClick }) => {
  return (
    <button onClick={onClick} className={classes.btn} style={style}>
      {text}
      {src && <img src={src} style={imgStyle} alt="icon" />}
    </button>
  );
};

export default Button;
