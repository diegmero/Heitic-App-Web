import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter } from "~/hooks/UseTypewriter";

export default function Index() {
  const animatedText = useTypewriter("Desarrollo web, aplicaciones web, Android, Servidores, Cloud, SRE.", 50);

  return (
    <div className="lg:h-[80vh] xs:h-[120vh] grid justify-items-center bg-slate-950 text-white overflow-hidden px-6">

<motion.main
        className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-[150px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Transformamos Ideas en Realidad Digital
        </h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 h-[3em]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {animatedText}
        </motion.p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/servicios"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-blue-100 transition duration-300 w-full sm:w-auto text-center"
          >
            Nuestros Servicios
          </Link>
          <Link
            to="/contacto"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition duration-300 w-full sm:w-auto text-center"
          >
            Contáctanos
          </Link>
        </div>
      </motion.main>

      <motion.section
        className="w-full max-w-4xl grid grid-cols-3 sm:grid-cols-6 gap-4 mt-[70px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          { name: 'Web', color: 'from-blue-500 to-cyan-500', icon: '🌐' },
          { name: 'Cloud', color: 'from-purple-500 to-pink-400', icon: '☁️' },
          { name: 'Mobile', color: 'from-green-500 to-emerald-500', icon: '📱' },
          { name: 'Servidores', color: 'from-red-500 to-orange-400', icon: '🖥️' },
          { name: 'WordPress', color: 'from-indigo-500 to-blue-400', icon: '🔧' },
          { name: 'Automatización', color: 'from-amber-700 to-yellow-500', icon: '🤖' }
        ].map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`bg-gradient-to-br ${tech.color} p-4 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center aspect-square`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 * index, duration: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-4xl md:text-5xl mb-2">{tech.icon}</span>
            <h3 className="text-sm md:text-base font-bold text-white text-center">{tech.name}</h3>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}