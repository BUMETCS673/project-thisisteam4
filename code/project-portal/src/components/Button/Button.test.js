/* eslint-disable no-undef */
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("should render a button with default text, color, and type", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("type", "submit");
});

test("should render a button with custom text and type", () => {
  render(<Button text="Submit" type="button" />);
  const buttonElement = screen.getByRole("button", { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("type", "button");
  expect(buttonElement).toHaveTextContent("Submit");
});

test('should render a button with class name "button"', () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });
  expect(buttonElement).toHaveClass("button");
});

test("should call the click function when clicked", () => {
  const mockClickFunction = jest.fn();
  render(<Button clickFunction={mockClickFunction} />);
  const buttonElement = screen.getByRole("button", { name: /click me/i });
  fireEvent.click(buttonElement);
  expect(mockClickFunction).toHaveBeenCalledTimes(1);
});
