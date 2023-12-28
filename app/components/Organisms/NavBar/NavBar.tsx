import MainHeader from "../../Molecules/MainHeader/MainHeader";
import Menu from "../../Molecules/Menu/Menu";
import SocialFooter from "../../Molecules/SocialFooter/SocialFooter";

const NavBar = () => {
  return (
    <section className="flex flex-col justify-start lg:sticky lg:h-screen top-0 z-30 px-10 lg:px-2 pt-20 pb-10 lg:py-28 lg:w-1/2 text-emerald-500">
      <section className="flex flex-col max-lg:items-center items-start gap-12 max-lg:text-center	">
        <MainHeader />
        <Menu />
      </section>
      <SocialFooter />
    </section>
  );
};

export default NavBar;
