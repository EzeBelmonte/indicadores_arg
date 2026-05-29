import { useEffect, useState } from "react"
import { motion } from "motion/react";
import logoNav from "@/assets/logo/logo.svg";


const Navbar = () => {

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
      height: isScrolled ? 60 : 76,
      /*backgroundColor: isScrolled
        ? "rgba(255,255,255,0.7)"
        : "rgba(255,255,255,0.9)",*/
      backgroundColor: "rgb(50,51,53)",
      color: "rgb(255,255,255)",
      /*backdropFilter: isScrolled
        ? "blur(16px)"
        : "blur(0px)",*/
    }}

    transition={{
      duration: 0.2,
      ease: "easeInOut"
    }}

    className="
      sticky top-0 z-50
      border-b border-white/10
    "
    >
      <nav className="max-w-7xl h-full flex items-center px-4 gap-10">

        <img
          src={logoNav}
          alt="Logo"
          className="w-30 md:w-30 lg:w-30 h-auto"
        />

        <ul className="flex font-bold text-[0.9rem] gap-6 py-4">

          <li><a href="#dolar">DÓLAR</a></li>
          <li><a href="#ipc">IPC</a></li>
          <li><a href="#riesgo-pais">RIESGO PAÍS</a></li>
          <li><a href="#canasta">CANASTA</a></li>
          <li><a href="#salario">SMVM</a></li>
          <li><a href="#ripte">RIPTE</a></li>
          <li><a href="#jubilacion">JUBILACIÓN</a></li>
          <li><a href="#pobreza">POBREZA</a></li>
          <li><a href="#billetera">BILLETERA</a></li>
          <li><a href="#merval">MERVAL</a></li>

        </ul>

      </nav>

    </motion.header>
  )
}

export default Navbar