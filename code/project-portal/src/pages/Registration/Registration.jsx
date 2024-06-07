import * as Yup from "yup";
import AuthForm from "./../Auth/AuthForm";
import { sanitizeInput } from "./../../utils/helpers";
import { registerUser } from "../../utils/auth";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .max(30, "First Name is too Long"),
  lastName: Yup.string().required("Required").max(30, "Last Name is too Long"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required").matches(
    passwordRegex,
    "Please use a strong password!!!"
  ),
  repassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const Registration = () => (
  <AuthForm
    title="Signup"
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      const sanitizedValues = {
        firstName: sanitizeInput(values.firstName),
        lastName: sanitizeInput(values.lastName),
        email: sanitizeInput(values.email),
      };
      registerUser(sanitizedValues, actions);
    }}
    fields={[
      { label: "First Name", type: "text", id: "firstName", name: "firstName", placeholder: "First Name" },
      { label: "Last Name", type: "text", id: "lastName", name: "lastName", placeholder: "Last Name" },
      { label: "Email", type: "email", id: "email", name: "email", placeholder: "someone@example.com" },
      { label: "Password", type: "password", id: "password", name: "password", placeholder: "Password" },
      { label: "Re-Password", type: "password", id: "repassword", name: "repassword", placeholder: "Repeat Password" },
    ]}
    buttonText="Register"
  />
);

export default Registration;
