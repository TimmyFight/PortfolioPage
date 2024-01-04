import Link from 'next/link';
import Headings from '../../Atoms/Headings/Headings';
import Typography from '../../Atoms/Typography/Typography';

const MainHeader = () => {
  return (
    <header data-testid="mainHeader">
      <Link href="/">
        <Headings
          level={1}
          customClass="font-bold text-4xl"
        >
          <>Adrian Ciołkiewicz</>
        </Headings>
      </Link>
      <Headings
        level={2}
        customClass="font-bold text-xl"
      >
        <>Frontend Developer</>
      </Headings>
      <Typography customClass="pt-2 text-emerald-700">
        <>Web application development is my primary focus.</>
      </Typography>
    </header>
  );
};

export default MainHeader;
