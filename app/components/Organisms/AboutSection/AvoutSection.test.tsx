import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";
import "@testing-library/jest-dom";

describe("AboutSection", () => {
  it("The AboutSection rendered", () => {
    render(<AboutSection />);
    const aboutSection = screen.getByTestId("aboutSection");
    expect(aboutSection).toBeDefined();
  });
});
