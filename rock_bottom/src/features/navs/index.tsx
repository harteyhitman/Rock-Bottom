'use client'
import Image from "next/image";
import Logo from "../../../public/assets/rock-bottom-logo.png";
import NavMenu from "@/components/nav-menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar_contain fixed top-0 left-0 w-full z-50 bg-white px-[80px] py-[30px] flex justify-between items-center shadow-md">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="cursor-pointer" />
        </Link>
      </div>
      <div className="navmenu">
        <NavMenu />
      </div>
    </div>
  );
};

export default NavBar;
