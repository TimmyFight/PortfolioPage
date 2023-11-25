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
        className="flex justify-center items-center cursor-pointer pb-1.5 transition-all font-bold hover:underline underline-offset-4 text-emerald-500">
        {item.name}
      </Link>
    </li>
  );
};

export default MenuPosition;
