import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiKubernetes, SiMongodb } from "react-icons/si";

export default function Tecnologias() {
  const technologies = [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaPython, name: "Python" },
    { icon: FaAws, name: "AWS" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiTensorflow, name: "TensorFlow" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiMongodb, name: "MongoDB" },
  ];

  return (
    <motion.div
      className="py-12 bg-slate-900 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden" style={{ height: '90px' }}>
          <motion.div
            className="flex space-x-8 absolute"
            animate={{
              x: [0, -2520],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: 'fit-content' }}
          >
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: '120px' }}>
                <tech.icon className="text-6xl mb-2 text-blue-400" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}