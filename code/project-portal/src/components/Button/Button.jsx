import "./Button.css";

function Button({ text = "Click Me", type = "submit", clickFunction }) {
  return (
    <button className="button" type={type} onClick={clickFunction}>
      {text}
    </button>
  );
}

export default Button;
