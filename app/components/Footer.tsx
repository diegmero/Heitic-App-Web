import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-950 mt-auto w-full py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      © 2024 Heitic Colombia. Todos los derechos reservados.
    </motion.footer>
  );
}