/* eslint-disable no-undef */
import Title from "./Title";
import { render, screen } from "@testing-library/react";

test("should render an h1 element that is visible", () => {
  render(<Title text="Heading Text" />);
  const headingElement = screen.getByRole("heading", { level: 1 });
  expect(headingElement).toBeVisible();
});

test('should render an h1 element with class name "title"', () => {
  render(<Title text="Hello, world!" />);
  const headingElement = screen.getByRole("heading", { level: 1 });
  expect(headingElement).toHaveClass("title");
});
