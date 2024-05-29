import "./Button.css";

function Button({
  text = "Click Me",
  color = "green",
  type = "submit",
  clickFunction,
}) {
  return (
    <button
      className="button"
      type={type}
      style={{ backgroundColor: color }}
      onClick={clickFunction}
    >
      {text}
    </button>
  );
}

export default Button;
