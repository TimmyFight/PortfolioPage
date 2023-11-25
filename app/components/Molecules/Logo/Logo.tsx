import Link from "next/link";
import Headings from "../../Atoms/Headings/Headings";

const Logo = () => {
  return (
    <Link href="/">
      <Headings level={1} customClass="font-bold text-xl text-emerald-500">
        <>&gt;_aciolkiewicz</>
      </Headings>
    </Link>
  );
};

export default Logo;
