import "./Input.css";
import { useField } from "formik";

function Input({ label = "User Input", ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="inputContainer">
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...props}
        {...field}
        className={meta.error && meta.touched ? "input input-error" : "input"}
        autoComplete="true"
      />
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </div>
  );
}

export default Input;
