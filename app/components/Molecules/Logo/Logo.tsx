import Link from "next/link";
import Headings from "../../Atoms/Headings/Headings";

const Logo = () => {
  return (
    <Link href="/">
      <Headings level={1} customClass="font-bold text-xl">
        <>@aciolkiewicz_</>
      </Headings>
    </Link>
  );
};

export default Logo;
