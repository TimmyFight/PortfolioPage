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
        className="flex items-strat cursor-pointer transition-all font-bold hover:underline underline-offset-4">
        {item.name}
      </Link>
    </li>
  );
};

export default MenuPosition;
