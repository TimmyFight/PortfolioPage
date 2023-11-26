import MenuIcon from "@mui/icons-material/Menu";
import { SOCIAL_ITEMS } from "@/constants";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex justify-center items-center relative bottom-0 z-30 p-5 bg-neutral-900">
      {SOCIAL_ITEMS.map((social) => {
        return (
          <Link href={social.href} target="_blank">
            <MenuIcon className="text-emerald-500" />
          </Link>
        );
      })}
    </footer>
  );
};

export default MainFooter;
