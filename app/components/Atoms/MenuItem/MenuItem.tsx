"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "@/lib/services/activeLinkSlice";
import { RootState } from "@/lib/services/StoreProvider";

interface MenuItemProperties {
  item: {
    name: string;
    href: string;
  };
}

const MenuItem = ({ item }: MenuItemProperties) => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state: RootState) => state.activeLink);
  return (
    <li
      className={`transition-all ${
        activeLink === item.href
          ? "duration-300 ease-in relative left-full text-lg"
          : "left-0"
      }`}>
      <Link
        data-testid="menuItem"
        href={item.href}
        className={`flex cursor-pointer font-bold underline-offset-4 hover:underline hover:text-emerald-500 ${
          activeLink === item.href
            ? "underline text-emerald-500"
            : "text-emerald-700"
        }`}
        onClick={() => dispatch(setActiveLink(`${item.href}`))}>
        {item.name}
      </Link>
    </li>
  );
};

export default MenuItem;
