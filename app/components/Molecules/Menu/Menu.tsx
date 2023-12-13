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
    <nav data-testid="menu">
      <ul className="flex flex-col align-start gap-4">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
