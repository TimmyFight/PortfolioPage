"use client";

import MenuItem from "../../Atoms/MenuItem/MenuItem";
import { MAIN_MENU_ITEMS } from "@/constants";
import { useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";

const Menu = () => {
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    if (window.location.hash === "") {
      dispatch(setActiveLink("./#about"));
    } else {
      dispatch(setActiveLink(`./${window.location.hash}`));
    }
  }

  return (
    <nav
      data-testid="menu"
      className="max-lg:fixed max-lg:top-0 max-lg:py-4 max-lg:bg-gradient-to-r from-neutral-900 to-neutral-800 max-lg:w-full max-lg:backdrop-blur-sm max-lg:backdrop-opacity-10">
      <ul className="flex flex-col align-start gap-4">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
