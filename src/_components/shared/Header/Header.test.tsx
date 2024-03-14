import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from ".";

describe("Header component", () => {
  test("renders the header component", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  it("displays the correct logo", () => {
    const { getByAltText } = render(<Header />);
    const logoElement = getByAltText("fitbod logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("navigates to home page when logo is clicked", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const links: HTMLAnchorElement[] = screen.getAllByRole("link");
    expect(links[0].getAttribute("test-id")).toBe("app-logo");
    fireEvent.click(links[0]);
    expect(window.location.pathname).toBe("/");
  });
});
