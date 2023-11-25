import Logo from "../../Molecules/Logo/Logo";
import Menu from "../../Molecules/Menu/Menu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center relative z-30 p-5 bg-neutral-900">
      <Logo />
      <Menu />
    </nav>
  );
};

export default NavBar;
