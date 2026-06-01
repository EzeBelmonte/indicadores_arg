import { useEffect, useState } from "react"
import { motion } from "motion/react";
import logoNav from "@/assets/logo/logo.svg";
import Image from "../ui/Image";
import { navItems } from "./NavItems";


const Navbar = () => {

  // Para el efecto del navbar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    }

  }, []);

  return (

    <motion.header

    animate={{
      height: isScrolled ? 55 : 70,
      backgroundColor: "rgb(50,51,53)",
      color: "rgb(255,255,255)",
    }}

    transition={{
      duration: 0.2,
      ease: "easeInOut"
    }}

    className="
      hidden md:flex
      sticky top-0 z-50
      border-b border-white/10
    "
    >
      <nav className="w-full h-full flex items-center px-4 gap-10">
        <a href="#inicio">
          <Image
            src={logoNav}
            alt="Logo"
            className="hidden lg:block lg:w-30 h-auto"
          />
        </a>

        <ul className="flex font-semibold text-[0.8rem] gap-3 py-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item.href} className="link-underline">
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Navbar