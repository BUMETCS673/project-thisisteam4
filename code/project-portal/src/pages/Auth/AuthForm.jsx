import React from "react";
import Container from "./../../components/Container/Container";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Title from "./../../components/Title/Title";
import Avatar from "./../../components/Avatar/Avatar";
import { Formik, Form } from "formik";
import { ThreeDots } from "react-loader-spinner";

const AuthForm = ({
  title,
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  buttonText,
}) => (
  <Container>
    <Avatar />
    <Title text={title} />
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form>
          {fields.map((field) => (
            <Input
              key={field.id}
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
            />
          ))}
          {!props.isSubmitting && (
            <Button text={buttonText} color="green" type="submit" />
          )}
          {props.isSubmitting && (
            <ThreeDots color="green" height={40} width={100} />
          )}
        </Form>
      )}
    </Formik>
  </Container>
);

export default AuthForm;
