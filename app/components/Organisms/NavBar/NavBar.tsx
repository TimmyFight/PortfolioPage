import MainHeader from "../../Molecules/MainHeader/MainHeader";
import Menu from "../../Molecules/Menu/Menu";
import SocialFooter from "../../Molecules/SocialFooter/SocialFooter";

const NavBar = () => {
  return (
    <section className="flex flex-col justify-start sticky h-screen top-0 z-30 px-2 py-28 w-1/2 text-emerald-500">
      <section className="flex flex-col items-start gap-12">
        <MainHeader />
        <Menu />
      </section>
      <SocialFooter />
    </section>
  );
};

export default NavBar;
