"use client";
import { motion } from "framer-motion";
import { Cog, Layers, Hammer, BarChart3, Box } from "lucide-react";
import EtapasProyecto from "@/components/etapas";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-6">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Laboratorio de dinámica: Análisis dinámico de un puente grúa (Principio de energía, trabajo y potencia)
      </h2>

      {/* Texto introductorio */}
      <p className="text-gray-700 text-justify text-[15px] leading-relaxed max-w-3xl mx-auto">
        El presente proyecto tiene como finalidad aplicar de manera práctica los principios fundamentales de la cinética de cuerpos rígidos,
        enfocándose en el análisis del trabajo, la energía y la potencia a través del diseño, modelado, fabricación y validación experimental de una torre grúa a escala.
        El sistema permitirá estudiar la transferencia de energía entre el motor eléctrico y la carga suspendida, así como la eficiencia mecánica y eléctrica del conjunto,
        mediante la comparación entre resultados teóricos, simulados y experimentales. De esta manera, se busca integrar los conocimientos de dinámica, diseño CAD,
        instrumentación y programación en un proyecto de ingeniería completo que reproduzca el comportamiento real de un sistema electromecánico industrial.
      </p>

      {/* Imagen central */}
      <div className="w-full flex justify-center">
        <img
          src="/proyecto.png"
          alt="Proyecto"
          className="rounded-xl shadow-md object-fit w-full max-w-3xl h-64 md:h-120 transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Botones */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full max-w-3xl">
        {["Fundamento", "Ejemplos", "Recursos", "Acerca"].map((label, i) => (
          <button
            key={i}
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            {label}
          </button>
        ))}
      </div> */}

      {/* Misión */}
      <motion.section
        whileHover={{ scale: 1.02 }}
        className="bg-gray-100 rounded-2xl shadow-md p-6 text-center max-w-3xl mx-auto"
      >
        <div className="flex flex-col items-center space-y-2">
          <Cog className="w-10 h-10 text-gray-700" />
          <h3 className="text-xl font-semibold text-gray-800">Misión</h3>
          <p className="text-gray-700 text-justify text-sm md:text-base">
            Desarrollar un modelo dinámico de una torre grúa a escala, diseñado y ensamblado en SolidWorks,
            que permita analizar su comportamiento mecánico y validar los principios de equilibrio,
            estabilidad y movimiento aplicados a sistemas con carga suspendida, fortaleciendo las competencias
            en simulación y análisis estructural dentro del campo de la ingeniería mecánica.
          </p>
        </div>
      </motion.section>

      <div className="max-w-3xl mx-auto">
        <EtapasProyecto />
      </div>
    </section>
  );
}
