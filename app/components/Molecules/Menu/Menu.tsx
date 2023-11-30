"use client";

import { useEffect, useState } from "react";
import MenuItem from "../../Atoms/MenuItem/MenuItem";
import { MAIN_MENU_ITEMS } from "@/constants";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    hash ? setActiveLink(`./${hash}`) : setActiveLink("./#about");
  }, []);
  return (
    <nav data-testid="menu">
      <ul className="flex flex-col align-start gap-4">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
