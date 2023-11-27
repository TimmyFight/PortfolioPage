import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SOCIAL_ITEMS } from "@/constants";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex gap-6 items-center absolute bottom-10">
      {SOCIAL_ITEMS.map((social) => {
        return (
          <Link href={social.href} target="_blank">
            {social.name === "GitHub" && <GitHubIcon />}
            {social.name === "LinkedIn" && <LinkedInIcon />}
          </Link>
        );
      })}
    </footer>
  );
};

export default MainFooter;
