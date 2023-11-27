import MenuIcon from "@mui/icons-material/Menu";
import { SOCIAL_ITEMS } from "@/constants";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex gap-6 items-center absolute bottom-10">
      {SOCIAL_ITEMS.map((social) => {
        return (
          <Link href={social.href} target="_blank">
            <MenuIcon />
          </Link>
        );
      })}
    </footer>
  );
};

export default MainFooter;
