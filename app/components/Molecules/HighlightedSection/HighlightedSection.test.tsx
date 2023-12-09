import { render, screen } from "@testing-library/react";
import HighlightedSection from "./HighlightedSection";
import "@testing-library/jest-dom";

describe("HighlightedSection", () => {
  it("The HighlightedSection rendered with Titile and Description", () => {
    render(<HighlightedSection title="Title" description="Description" />);
    const highlightedSection = screen.getByTestId("highlightedSection");
    const titleElement = highlightedSection.querySelector("h2");
    const descriptionElement = highlightedSection.querySelector("p");

    expect(highlightedSection).toBeInTheDocument();
    expect(titleElement?.textContent).toBe("Title");

    expect(titleElement?.tagName).toBe("H2");

    expect(descriptionElement?.textContent).toBe("Description");
  });

  it("The HighlightedSection rendered with additional titles", () => {
    render(
      <HighlightedSection
        title="Title"
        title2="Title2"
        title3="Title3"
        description="Description"
      />
    );
    const highlightedSection = screen.getByTestId("highlightedSection");
    const titleElement = highlightedSection.querySelector("h2");
    const title2Element = highlightedSection.querySelector("h3");
    const titl3Element = highlightedSection.querySelector("h4");
    const descriptionElement = highlightedSection.querySelector("p");

    expect(highlightedSection).toBeInTheDocument();
    expect(titleElement?.textContent).toBe("Title");
    expect(title2Element?.textContent).toBe("Title2");
    expect(titl3Element?.textContent).toBe("Title3");

    expect(titleElement?.tagName).toBe("H2");
    expect(title2Element?.tagName).toBe("H3");
    expect(titl3Element?.tagName).toBe("H4");

    expect(descriptionElement?.textContent).toBe("Description");
  });

  it("The HighlightedSection rendered with aside image", () => {
    const imagePath = "/image.png";

    render(
      <HighlightedSection
        title="Title"
        description="Description"
        asideImage={imagePath}
      />
    );
    const asideSection = screen.getByTestId("asideSection");
    const asideImage = asideSection.querySelector("img");

    expect(asideImage?.getAttribute("src")).toMatch("image.png");
  });

  it("The HighlightedSection rendered with aside text", () => {
    const asideDescription = "/image.png";

    render(
      <HighlightedSection
        title="Title"
        description="Description"
        asideText={asideDescription}
      />
    );
    const asideSection = screen.getByTestId("asideSection");
    const asideText = asideSection.querySelector("p");

    expect(asideSection?.textContent).toBe(asideDescription);
  });
});
