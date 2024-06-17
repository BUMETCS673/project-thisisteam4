/* eslint-disable no-undef */
import Input from "./Input";
import { render, screen } from "@testing-library/react";
import { Formik, Form } from "formik";

test("should render with label and input", () => {
  render(
    <Formik initialValues={{}}>
      <Form>
        <Input name="test" id="userinput" />
      </Form>
    </Formik>
  );

  const labelElement = screen.getByText(/user input/i);
  const inputElement = screen.getByRole("textbox", { name: /User Input/i });

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
