import "./Input.css";
import { useField } from "formik";
<<<<<<< HEAD
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

function Input({ label = "User Input", ...props }) {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);
=======

function Input({ label = "User Input", ...props }) {
  const [field, meta] = useField(props);
>>>>>>> main

  return (
    <div className="inputContainer">
      <label className="label" htmlFor={props.id}>
        {label}
      </label>
<<<<<<< HEAD
      {props.type !== "password" && (
        <input
          {...props}
          {...field}
          className={meta.error && meta.touched ? "input input-error" : "input"}
          autoComplete="true"
        />
      )}
      {props.type === "password" && (
        <input
          {...props}
          {...field}
          type={show ? "text" : "password"}
          className={meta.error && meta.touched ? "input input-error" : "input"}
          autoComplete="true"
        />
      )}
      {props.type === "password" && (
        <p onClick={() => setShow(!show)} className="show-pass-icon">
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </p>
      )}
=======
      <input
        {...props}
        {...field}
        className={meta.error && meta.touched ? "input input-error" : "input"}
        autoComplete="true"
      />
>>>>>>> main
      {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </div>
  );
}

export default Input;
