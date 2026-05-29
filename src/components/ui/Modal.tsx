import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../components"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};


const Modal = ({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) => {

  // Bloquear scroll
  useEffect(() => {

    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };

  }, [isOpen]);

  // Escape
  useEffect(() => {

    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };

  }, [isOpen, onClose]);

  return createPortal(

    <AnimatePresence>

      {isOpen && (

        <motion.div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50 backdrop-blur-sm
            p-4
          "
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >

          <motion.div
            className="
              relative
              w-full max-w-7xl h-[90vh]
              rounded
              bg-[rgba(32,36,37,0.88)]
              px-6 pb-6 pt-4
              shadow-2xl overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
            initial={{
              scale: 0.95,
              opacity: 0,
              y: 10,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              y: 10,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >

            <div className="mb-10">
              
              <h3 className="text-3xl font-bold text-white">{title}</h3>

              <Button
                onClick={onClose}
                className="
                  absolute right-6 top-4
                  text-2xl text-gray-500
                  hover:text-[#c96464] cursor-pointer
                "
              >
                ✕
              </Button>

            </div>

            <div>
              {children}
            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>,

    document.body
  );
};

export default Modal;