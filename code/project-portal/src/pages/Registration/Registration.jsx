import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { sanitizeInput } from "./../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/auth";
import { useState } from "react";

//Regular expression for password
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//Validation schema with yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(3, "first name must be 2 or more characters."),
  lastName: Yup.string()
    .required("Required")
    .min(3, "first name must be 2 or more characters."),
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(passwordRegex, "Please use a strong password!!!"),
  repassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

/**
 * Registration form Component with Formik
 */
function Registration() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <SuccessModal show={showModal} />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          repassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setFieldError, setSubmitting }) => {
          console.log(values);
          const sanitizedValues = {
            firstName: sanitizeInput(values.firstName),
            lastName: sanitizeInput(values.lastName),
            username: sanitizeInput(values.username),
            password: values.password,
          };
          //console.log(values, actions)
          const response = await registerUser(
            sanitizedValues,
            setFieldError,
            setSubmitting,
            navigate
          );
          if (response.ok) {
            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
              window.location.href = "/auth";
            }, 1000);
          }
        }}
      >
        {({ isSubmitting }) => (
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
            {!isSubmitting && <Button text="Register" type="submit" />}
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
