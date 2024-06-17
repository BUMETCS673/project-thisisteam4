/* eslint-disable no-undef */
import Registration from "./Registration";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render and submit Formik registration form", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();
  await user.type(screen.getByRole("textbox", { name: /first name/i }), "John");
  await user.type(screen.getByRole("textbox", { name: /last name/i }), "Doe");
  await user.type(
    screen.getByRole("textbox", { name: /email/i }),
    "johndoe@gmail.com"
  );
  await user.type(screen.getAllByText(/Password/i)[0], "1234@JohnDoe");
  await user.type(screen.getByLabelText(/Re-password/i), "1234@JohnDoe");

  await user.click(screen.getByRole("button", { name: /register/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "johndoe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      password: "1234@JohnDoe",
      repassword: "1234@JohnDoe",
    })
  );
});

test("should render required for empty first name", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  const firstNameInput = screen.getByRole("textbox", { name: /first name/i });
  await user.click(firstNameInput);
  await user.tab();
  await waitFor(() => {
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });
});

test("should render required for empty last name", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  const lastNameInput = screen.getByRole("textbox", { name: /last name/i });
  await user.click(lastNameInput);
  await user.tab();
  await waitFor(() => {
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });
});

test("should render required for empty email address", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  await user.click(emailInput);
  await user.tab();
  await waitFor(() => {
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });
});

test("should render required for empty password", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  const passwordInput = screen.getAllByText(/Password/i)[0];
  await user.click(passwordInput);
  await user.tab();
  await waitFor(() => {
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });
});

test("should render required for empty repeat password", async () => {
  const handleSubmit = jest.fn();
  render(<Registration onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  const rePasswordInput = screen.getByLabelText(/Re-password/i);
  await user.click(rePasswordInput);
  await user.tab();
  await waitFor(() => {
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });
});
