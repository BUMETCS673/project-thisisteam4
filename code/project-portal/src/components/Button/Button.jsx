import "./Button.css";

<<<<<<< HEAD
function Button({ text = "Click Me", type = "submit", clickFunction }) {
  return (
    <button className="button" type={type} onClick={clickFunction}>
=======
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
>>>>>>> main
      {text}
    </button>
  );
}

export default Button;
