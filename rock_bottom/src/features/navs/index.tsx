import Image from "next/image";
import Logo from "../../../public/assets/rock-bottom-logo.png";
import NavMenu from "@/components/nav-menu";
import Link from "next/link";
const NavBar = () => {
  return (
    <Link href='/'>
   
    <div className="navbar_contain px-[80px] py-[30px] flex justify-between align-center">
      <div className="logo">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="navmenu">
        <NavMenu />
      </div>
    </div>
     </Link>
  );
};

export default NavBar;
