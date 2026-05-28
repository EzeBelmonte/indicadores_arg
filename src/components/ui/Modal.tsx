import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  children,
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
              w-full max-w-2xl
              rounded-2xl
              bg-white
              p-6
              shadow-2xl
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

            <button
              onClick={onClose}
              className="
                absolute right-4 top-4
                text-2xl text-gray-500
                hover:text-black
              "
            >
              ✕
            </button>

            {children}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>,

    document.body
  );
};

export default Modal;