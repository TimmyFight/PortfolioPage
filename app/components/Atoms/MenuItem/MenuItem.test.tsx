import { screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import "@testing-library/jest-dom";
import { renderWithRedux } from "@/lib/utils/testUtils";

describe("MenuItem", () => {
  const item = {
    name: "About",
    href: "/#about",
  };

  it("The MenuItem rendered when item is active", () => {
    renderWithRedux(<MenuItem item={item} />, {
      initialState: { activeLink: item.href },
    });
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem).toHaveClass("text-emerald-500");
  });

  it("The MenuItem rendered when other item is active", () => {
    renderWithRedux(<MenuItem item={item} />, {
      initialState: { activeLink: "/#projects" },
    });
    const menuItem = screen.getByTestId("menuItem");
    expect(menuItem.textContent).toBe("About");
    expect(menuItem).toHaveClass("text-emerald-700");
  });
});
