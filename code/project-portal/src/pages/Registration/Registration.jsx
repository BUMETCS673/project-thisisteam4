import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Title from "./../../components/Title/Title";
import Avatar from "./../../components/Avatar/Avatar";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { sanitizeInput } from "./../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/auth";

//Regular expression for password
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//Validation schema with yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .max(30, "First Name is too Long"),
  lastName: Yup.string().required("Required").max(30, "Last Name is too Long"),
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().matches(
    passwordRegex,
    "Please use a strong password!!!"
  ),
  repassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

/**
 * Registration form Component with Formik
 */
function Registration() {
  const navigate = useNavigate()
  return (
    <Container>
      <Avatar />
      <Title text="Signup" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          repassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {setFieldError, setSubmitting}) => {
          const sanitizedValues = {
            firstName: sanitizeInput(values.firstName),
            lastName: sanitizeInput(values.lastName),
            username: sanitizeInput(values.username),
            password: values.password,
          };
          //console.log(values, actions)
          await registerUser(sanitizedValues, setFieldError, setSubmitting, navigate);
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <Input
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <Input
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <Input
              label="Email"
              type="email"
              id="username"
              name="username"
              placeholder="email : someone@example.com"
            />
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <Input
              label="Re-Password"
              type="password"
              id="repassword"
              name="repassword"
              placeholder="Repeat Password"
            />
            {!isSubmitting && (
              <Button text="Register" color="green" type="submit" />
            )}
            {isSubmitting && (
              <ThreeDots color="green" height={40} width={100} />
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Registration;

// import * as Yup from "yup";
// import AuthForm from "./../Auth/AuthForm";
// import { sanitizeInput } from "./../../utils/helpers";
// import { registerUser } from "../../utils/auth";

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const validationSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("Required")
//     .max(30, "First Name is too Long"),
//   lastName: Yup.string().required("Required").max(30, "Last Name is too Long"),
//   username: Yup.string().required("Required").min(4, "Username is too short"),
//   email: Yup.string().email("Invalid email address").required("Required"),
//   password: Yup.string().required("Required").matches(
//     passwordRegex,
//     "Please use a strong password!!!"
//   ),
//   repassword: Yup.string()
//     .required("Required")
//     .oneOf([Yup.ref("password")], "Passwords must match"),
// });

// const Registration = () => (
//   <AuthForm
//     title="Signup"
//     initialValues={{
//       firstName: "",
//       lastName: "",
//       username: "",
//       email: "",
//       password: "",
//       repassword: "",
//     }}
//     validationSchema={validationSchema}
//     onSubmit={(values, actions, navigate) => {
//       const sanitizedValues = {
//         firstName: sanitizeInput(values.firstName),
//         lastName: sanitizeInput(values.lastName),
//         username: sanitizeInput(values.username),
//         email: sanitizeInput(values.email),
//         password: values.password
//       };
//       registerUser(sanitizedValues, actions, navigate);
//     }}
//     fields={[
//       { label: "First Name", type: "text", id: "firstName", name: "firstName", placeholder: "First Name" },
//       { label: "Last Name", type: "text", id: "lastName", name: "lastName", placeholder: "Last Name" },
//       { label: "User Name", type: "text", id: "username", name: "username", placeholder: "User Name"},
//       { label: "Email", type: "email", id: "email", name: "email", placeholder: "someone@example.com" },
//       { label: "Password", type: "password", id: "password", name: "password", placeholder: "Password" },
//       { label: "Re-Password", type: "password", id: "repassword", name: "repassword", placeholder: "Repeat Password" },
//     ]}
//     buttonText="Register"
//   />
// );

// export default Registration;
