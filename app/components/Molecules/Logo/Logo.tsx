import Link from "next/link";
import Headings from "../../Atoms/Headings/Headings";
import Typography from "../../Atoms/Typography/Typography";

const Logo = () => {
  return (
    <header>
      <Link href="/">
        <Headings level={1} customClass="font-bold text-4xl">
          <>Adrian Ciołkiewicz</>
        </Headings>
      </Link>
      <Headings level={2} customClass="font-bold text-xl">
        <>Frontend Developer</>
      </Headings>
      <Typography customClass="pt-2">
        Web application development is my primary focus.
      </Typography>
    </header>
  );
};

export default Logo;
