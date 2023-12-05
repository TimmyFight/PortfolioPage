import { screen, fireEvent } from "@testing-library/react";
import MenuItem from "./MenuItem";
import "@testing-library/jest-dom";
import { renderWithRedux } from "@/lib/utils/testUtils";

const mockSetActiveLink = jest.fn();

describe("MenuItem", () => {
  const item = {
    name: "About",
    href: "/#about",
  };

  it("The MenuItem rendered when other item is active", () => {
    renderWithRedux(<MenuItem item={item} />);
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem.classList).toContain("text-emerald-700");
  });

  it("The MenuItem rendered when item is active", () => {
    renderWithRedux(<MenuItem item={item} />);
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem.classList).toContain("text-emerald-500");
  });

  it("Calls setActiveLink with the correct argument when clicked", () => {
    renderWithRedux(<MenuItem item={item} />);
    const menuItem = screen.getByTestId("menuItem");
    fireEvent.click(menuItem);
    expect(mockSetActiveLink).toHaveBeenCalledWith(item.href);
  });
});
