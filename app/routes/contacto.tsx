import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import Tecnologias from "~/components/Tecnologias";

export default function Contacto() {
  return (
    <div className=" bg-slate-950 text-white flex flex-col">
      <motion.main
        className="flex-grow max-w-4xl mx-auto px-4 py-8 md:py-16 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">Contáctanos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <p className="mb-4">Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o proyecto.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <HiLocationMarker className="mr-3 text-blue-400 text-xl" /> Bogotá, Colombia
              </li>
              <li className="flex items-center">
                <HiPhone className="mr-3 text-blue-400 text-xl" />
                <a href="tel:+573503764821" className="hover:text-blue-300 transition duration-300">
                  +57 3503764821
                </a>
              </li>
              <li className="flex items-center">
                <HiMail className="mr-3 text-blue-400 text-xl" />
                <a href="mailto:admin@heitic.com" className="hover:text-blue-300 transition duration-300">
                  admin@heitic.com
                </a>
              </li>
              <li className="flex items-center">
                <ImWhatsapp className="mr-3 text-blue-400 text-xl" />
                <a
                  href="https://wa.me/573503764821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <label htmlFor="nombre" className="block mb-1">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 bg-slate-800 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-slate-800 rounded-md" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block mb-1">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 bg-slate-800 rounded-md"></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition duration-300 md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </motion.main>

      <Tecnologias />
    </div>
  );
}