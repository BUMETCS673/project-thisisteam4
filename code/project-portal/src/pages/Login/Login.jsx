import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { loginUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sanitizeInput } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

//Validation schema with Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "Password too short.").required("Required"),
});

/**
 *
 * @returns Login component with Formik
 */
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setFieldError, setSubmitting }) => {
          const sanitizedValues = {
            username: sanitizeInput(values.username),
            password: values.password,
          };
          await loginUser(
            sanitizedValues,
            setFieldError,
            setSubmitting,
            navigate,
            dispatch
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
            {!isSubmitting && <Button text="Login" type="submit" />}
            {isSubmitting && (
              <ThreeDots color="green" height={40} width={100} />
            )}
          </Form>
        )}
      </Formik>
      <Link className="auth0" onClick={() => loginWithRedirect()}>
        Authenticate with Auth0
      </Link>
    </Container>
  );
}

export default Login;
