import { useState, useRef, useEffect } from "react";
import logoNav from "@/assets/logo/logo.svg";
import { Button, Image } from "../";
import { Menu, X } from "lucide-react";
import { navItems } from "./NavItems";


const Buttonbar = () => {

  // Para cerrar al hacer clic afuera
  const menuRef = useRef<HTMLDivElement>(null);

  const [openMenu, setOpenMenu] = useState(false);

  // Cerrar y abrir menú
  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  }

  // Para las etiquetas a
  const closeMenu = () => setOpenMenu(false);

  // Para cerrar el menu al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Deshabilitar el movimiento del fondo cuando está el menú abierto
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    
    <div className="md:hidden">
      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Boton para abrir el menú */}
      <div className="fixed top-0 z-50 p-2">
        {!openMenu && (
          <Button
            onClick={handleOpenMenu}
            aria-label="Abrir menú"
          >
            <Menu
              className="bg-[#3d3a3a] rounded-[7px] w-7.5 h-7.5 p-1 opacity-90 border border-white/30"
              color="white"
            />
          </Button>
        )}

        {/* Drawer */}
        <nav 
          className={`
            fixed top-0 left-0 h-screen w-72
            bg-[rgb(50,51,53)] text-white
            z-50 shadow-xl

            transform transition-transform duration-300 ease-in-out

            ${openMenu
              ? "translate-x-0"
              : "-translate-x-full"
            }
          `}
        >
          {/* Boton para cerrar el menú */}
          <Button
            onClick={closeMenu}
            className="
              absolute
              top-0
              right-2
              p-2
            "
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Header */}
          <div className="bg-[#282929] px-4 py-3 border-b border-white/10">
            <a 
              href="#inicio"
              onClick={closeMenu}
            >
              <Image
                src={logoNav}
                alt="Logo"
                className="w-32 h-auto"
              />
            </a>
          </div>

          {/* Navegación */}
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  onClick={closeMenu}
                   className="
                    block px-6 py-2
                    font-semibold text-sm hover:bg-white/10 transition-colors
                  "
                >
                    {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Buttonbar;