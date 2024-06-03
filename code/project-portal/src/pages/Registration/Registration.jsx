import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Title from "./../../components/Title/Title";
import Avatar from "./../../components/Avatar/Avatar";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { sanitizeInput } from "./../../utils/helpers";
//import { useNavigate } from "react-router-dom";

//Validation schema with yup
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .max(30, "First Name is too Long"),
  lastName: Yup.string().required("Required").max(30, "Last Name is too Long"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().matches(
    passwordRegex,
    "Please use a strong password!!!"
  ),
  repassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

function Registration({ registerUser }) {
  //const navigate = useNavigate()
  return (
    <Container>
      <Avatar />
      <Title text="Signup" />
      <Formik
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
          registerUser(sanitizedValues, actions /**navigate*/);
          actions.resetForm();
        }}
      >
        {(props) => (
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
              id="email"
              name="email"
              placeholder="someone@example.com"
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
            {!props.isSubmitting && (
              <Button text="Register" color="green" type="submit" />
            )}
            {props.isSubmitting && (
              <ThreeDots color="green" height={40} width={100} />
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Registration;
