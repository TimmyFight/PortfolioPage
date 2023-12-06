"use client";

import MenuItem from "../../Atoms/MenuItem/MenuItem";
import { MAIN_MENU_ITEMS } from "@/constants";
import { useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  hash
    ? dispatch(setActiveLink(`./${hash}`))
    : dispatch(setActiveLink("./#about"));

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
