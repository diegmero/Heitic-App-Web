import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    { name: 'Desarrollo Web', icon: '🌐', description: 'Creamos sitios web modernos y responsivos que destacan tu marca.' },
    { name: 'Cloud Computing', icon: '☁️', description: 'Soluciones en la nube escalables y seguras para tu negocio.' },
    { name: 'Desarrollo Móvil', icon: '📱', description: 'Aplicaciones nativas y multiplataforma para Android e iOS.' },
    { name: 'Servidores', icon: '🖥️', description: 'Gestión, Administración y optimización de infraestructura.' },
    { name: 'WordPress', icon: '🔧', description: 'Desarrollo y personalización de sitios WordPress.' },
    { name: 'Automatización', icon: '🤖', description: 'Optimiza tus procesos con soluciones de automatización inteligente.' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <motion.main
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Nuestros Servicios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.name}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <span className="text-4xl mb-4 block">{servicio.icon}</span>
              <h2 className="text-2xl font-bold mb-3">{servicio.name}</h2>
              <p className="text-sm opacity-90 mb-4">{servicio.description}</p>
              <motion.button
                className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Más información
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}