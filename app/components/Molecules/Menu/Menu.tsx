import MenuPosition from "../../Atoms/MenuPosition/MenuPosition";
import MenuIcon from "@mui/icons-material/Menu";
import { MAIN_MENU_ITEMS } from "@/constants";

interface MenuProperties {
  menuItems: { name: string; href: string }[];
}

const Menu = () => {
  return (
    <>
      <ul className="hidden h-full gap-12 lg:flex">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuPosition key={item.name} item={item} />
        ))}
      </ul>

      <div className="inline-block cursor-pointer lg:hidden">
        <MenuIcon className="text-emerald-500" />
      </div>
    </>
  );
};

export default Menu;
