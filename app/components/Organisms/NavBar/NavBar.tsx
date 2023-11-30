import MainHeader from "../../Molecules/MainHeader/MainHeader";
import Menu from "../../Molecules/Menu/Menu";
import SocialFooter from "../../Molecules/SocialFooter/SocialFooter";

const NavBar = () => {
  return (
    <section className="flex flex-col justify-start items-center relative z-30 p-28 bg-neutral-900 h-screen text-emerald-500">
      <section className="flex flex-col items-start gap-12">
        <MainHeader />
        <Menu />
      </section>
      <SocialFooter />
    </section>
  );
};

export default NavBar;
