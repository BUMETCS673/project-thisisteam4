import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Title from "./../../components/Title/Title";
import Avatar from "./../../components/Avatar/Avatar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(8, "Password too short.").required("Required"),
});

function Login({ loginUser }) {
  return (
    <Container>
      <Avatar />
      <Title text="Login" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          loginUser(values, actions);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form>
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
            {!props.isSubmitting && (
              <Button text="Login" color="green" type="submit" />
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

export default Login;
