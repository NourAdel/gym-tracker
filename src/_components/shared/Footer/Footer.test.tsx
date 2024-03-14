import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer component", () => {
  test("renders the footer component", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
