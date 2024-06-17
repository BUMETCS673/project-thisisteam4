/* eslint-disable no-undef */
import Container from "./Container";
import { render, screen } from "@testing-library/react";

test("should render children correctly", () => {
  render(
    <Container>
      <p>Test Child</p>
    </Container>
  );
  const childElement = screen.getByText(/test child/i);
  expect(childElement).toBeInTheDocument();
});

test('should render with class name "container"', () => {
  render(
    <Container>
      <p>Test Child</p>
    </Container>
  );
  const containerElement = screen.getByText(/test child/i).parentElement;
  expect(containerElement).toHaveClass("container");
});

test("should be visible", () => {
  render(
    <Container>
      <p>Test Child</p>
    </Container>
  );
  const containerElement = screen.getByText(/test child/i).parentElement;
  expect(containerElement).toBeVisible();
});
