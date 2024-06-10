import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Title from "./../../components/Title/Title";
import Avatar from "./../../components/Avatar/Avatar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { loginUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sanitizeInput } from "../../utils/helpers";

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
    </Container>
  );
}

export default Login;

// import * as Yup from "yup";
// import AuthForm from "./../Auth/AuthForm";
// import { sanitizeInput } from "../../utils/helpers";
// import { loginUser } from "../../utils/auth";
// import { useDispatch } from "react-redux";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email address").required("Required"),
//   password: Yup.string().min(8, "Password too short.").required("Required"),
// });

// const Login = () => {
//   const dispatch = useDispatch()
//   return (
//     <AuthForm
//       title="Login"
//       initialValues={{ email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values, actions, navigate) => {
//         const sanitizedValues = {
//           email: sanitizeInput(values.email),
//         };
//         loginUser(sanitizedValues, actions, navigate, dispatch);
//       }}
//       fields={[
//         {
//           label: "Email",
//           type: "email",
//           id: "email",
//           name: "email",
//           placeholder: "someone@example.com",
//         },
//         {
//           label: "Password",
//           type: "password",
//           id: "password",
//           name: "password",
//           placeholder: "Password",
//         },
//       ]}
//       buttonText="Login"
//     />
//   );
// };

// export default Login;
