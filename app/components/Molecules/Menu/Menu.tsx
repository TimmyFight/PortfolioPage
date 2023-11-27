import MenuPosition from "../../Atoms/MenuPosition/MenuPosition";
import MenuIcon from "@mui/icons-material/Menu";
import { MAIN_MENU_ITEMS } from "@/constants";

interface MenuProperties {
  menuItems: { name: string; href: string }[];
}

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col align-start gap-4">
        {MAIN_MENU_ITEMS.map((item) => (
          <MenuPosition key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
