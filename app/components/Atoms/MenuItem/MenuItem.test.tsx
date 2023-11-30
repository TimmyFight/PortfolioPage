import { render, screen, fireEvent } from "@testing-library/react";
import MenuItem from "./MenuItem";
import "@testing-library/jest-dom";

const mockSetActiveLink = jest.fn();

describe("MenuItem", () => {
  const notActiveItem = {
    item: {
      name: "About",
      href: "/#about",
    },
    activeLink: "/#projects",
    setActiveLink: mockSetActiveLink,
  };

  const activeItem = {
    item: {
      name: "About",
      href: "/#about",
    },
    activeLink: "/#about",
    setActiveLink: mockSetActiveLink,
  };

  it("The MenuItem rendered when other item is active", () => {
    render(<MenuItem {...notActiveItem} />);
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem.classList).toContain("text-emerald-700");
  });

  it("The MenuItem rendered when item is active", () => {
    render(<MenuItem {...activeItem} />);
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem.classList).toContain("text-emerald-500");
  });

  it("Calls setActiveLink with the correct argument when clicked", () => {
    render(<MenuItem {...notActiveItem} />);
    const menuItem = screen.getByTestId("menuItem");
    fireEvent.click(menuItem);
    expect(mockSetActiveLink).toHaveBeenCalledWith(notActiveItem.item.href);
  });
});
