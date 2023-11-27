import Logo from "../../Molecules/Logo/Logo";
import Menu from "../../Molecules/Menu/Menu";
import MainFooter from "../MainFooter/MainFooter";

const NavBar = () => {
  return (
    <section className="flex flex-col justify-start items-center relative z-30 p-28 bg-neutral-900 h-screen text-emerald-500">
      <section className="flex flex-col items-start gap-12">
        <Logo />
        <Menu />
      </section>
      <MainFooter />
    </section>
  );
};

export default NavBar;
