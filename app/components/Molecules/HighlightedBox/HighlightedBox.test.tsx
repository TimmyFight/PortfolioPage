import { render, screen } from "@testing-library/react";
import HighlightedBox from "./HighlightedBox";
import "@testing-library/jest-dom";

describe("HighlightedBox", () => {
  it("The HighlightedBox rendered with Titile and Description", () => {
    render(<HighlightedBox title="Title" description="Description" />);
    const highlightedBox = screen.getByTestId("highlightedBox");
    const titleElement = highlightedBox.querySelector("h2");
    const descriptionElement = highlightedBox.querySelector("p");

    expect(highlightedBox).toBeInTheDocument();
    expect(titleElement?.textContent).toBe("Title");

    expect(titleElement?.tagName).toBe("H2");

    expect(descriptionElement?.textContent).toBe("Description");
  });

  it("The HighlightedBox rendered with additional titles", () => {
    render(
      <HighlightedBox
        title="Title"
        title2="Title2"
        title3="Title3"
        description="Description"
      />
    );
    const highlightedBox = screen.getByTestId("highlightedBox");
    const titleElement = highlightedBox.querySelector("h2");
    const title2Element = highlightedBox.querySelector("h3");
    const titl3Element = highlightedBox.querySelector("h4");
    const descriptionElement = highlightedBox.querySelector("p");

    expect(highlightedBox).toBeInTheDocument();
    expect(titleElement?.textContent).toBe("Title");
    expect(title2Element?.textContent).toBe("Title2");
    expect(titl3Element?.textContent).toBe("Title3");

    expect(titleElement?.tagName).toBe("H2");
    expect(title2Element?.tagName).toBe("H3");
    expect(titl3Element?.tagName).toBe("H4");

    expect(descriptionElement?.textContent).toBe("Description");
  });

  it("The HighlightedBox rendered with aside image", () => {
    const imagePath = "/image.png";

    render(
      <HighlightedBox
        title="Title"
        description="Description"
        asideImage={imagePath}
      />
    );
    const asideSection = screen.getByTestId("asideSection");
    const asideImage = asideSection.querySelector("img");

    expect(asideImage?.getAttribute("src")).toMatch("image.png");
  });

  it("The HighlightedBox rendered with aside text", () => {
    const asideDescription = "/image.png";

    render(
      <HighlightedBox
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
