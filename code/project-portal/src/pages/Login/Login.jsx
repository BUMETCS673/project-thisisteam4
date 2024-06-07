import * as Yup from "yup";
import AuthForm from "./../Auth/AuthForm";
import { sanitizeInput } from "../../utils/helpers";
import { loginUser } from "../../utils/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "Password too short.").required("Required"),
});

const Login = () => (
  <AuthForm
    title="Login"
    initialValues={{ email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      const sanitizedValues = {
        email: sanitizeInput(values.email),
      };
      loginUser(sanitizedValues, actions)
    }}
    fields={[
      { label: "Email", type: "email", id: "email", name: "email", placeholder: "someone@example.com" },
      { label: "Password", type: "password", id: "password", name: "password", placeholder: "Password" },
    ]}
    buttonText="Login"
  />
);

export default Login;
