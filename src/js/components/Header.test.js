import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders header with passed in title", () => {
  render(<Header title="plum guide" />);
  const title = screen.getByText(/plum guide/i);
  expect(title).toBeTruthy();
});
