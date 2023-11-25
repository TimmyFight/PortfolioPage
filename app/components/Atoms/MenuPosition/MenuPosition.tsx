import Link from "next/link";

interface MenuPositionProperties {
  item: {
    name: string;
    href: string;
  };
}

const MenuPosition = ({ item }: MenuPositionProperties) => {
  return (
    <li>
      <Link
        href={item.href}
        className="flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
        {item.name}
      </Link>
    </li>
  );
};

export default MenuPosition;
