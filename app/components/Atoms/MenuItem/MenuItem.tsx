"use client";

import Link from "next/link";

interface MenuItemProperties {
  item: {
    name: string;
    href: string;
  };
  activeLink: string;
  setActiveLink(clickedLink: string): void;
}

const MenuItem = ({ item, activeLink, setActiveLink }: MenuItemProperties) => {
  return (
    <li>
      <Link
        data-testid="menuItem"
        href={item.href}
        className={`flex items-strat cursor-pointer transition-all font-bold underline-offset-4 hover:underline hover:text-emerald-500 ${
          activeLink === item.href
            ? "underline text-emerald-500"
            : "text-emerald-700"
        }`}
        onClick={() => setActiveLink(`${item.href}`)}>
        {item.name}
      </Link>
    </li>
  );
};

export default MenuItem;
