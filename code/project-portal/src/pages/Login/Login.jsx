import React from "react";
import * as Yup from "yup";
import AuthForm from "./../Auth/AuthForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "Password too short.").required("Required"),
});

const Login = ({ loginUser }) => (
  <AuthForm
    title="Login"
    initialValues={{ email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={loginUser}
    fields={[
      { label: "Email", type: "email", id: "email", name: "email", placeholder: "someone@example.com" },
      { label: "Password", type: "password", id: "password", name: "password", placeholder: "Password" },
    ]}
    buttonText="Login"
  />
);

export default Login;
