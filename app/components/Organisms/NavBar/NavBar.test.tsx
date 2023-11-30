import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";

describe("NavBar", () => {
  it("The NavBar has been rendered with MainHeader, Menu and SocialFooter", () => {
    render(<NavBar />);

    const mainHeader = screen.getByTestId("mainHeader");
    const menu = screen.getByTestId("menu");
    const socialFooter = screen.getByTestId("socialFooter");

    expect(mainHeader && menu && socialFooter).toBeTruthy();
  });
});
