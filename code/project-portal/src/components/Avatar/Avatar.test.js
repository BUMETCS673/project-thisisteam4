/* eslint-disable no-undef */
import Avatar from "./Avatar";
import { render } from "@testing-library/react";

test("should be visible", () => {
  render(<Avatar />);
  const avatarElement = document.querySelector(".avatar");
  expect(avatarElement).toBeVisible();
});
