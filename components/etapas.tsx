"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Hammer, BarChart3, Box, Cog } from "lucide-react";

export default function EtapasProyecto() {
  const [selected, setSelected] = useState<number | null>(null);

  const etapas = [
    {
      icon: Layers,
      titulo: "Diseño CAD",
      descripcion: "Modelado de piezas y ensamblajes.",
      detalle:
        "En esta fase se realiza el modelado 3D de cada componente de la torre grúa, considerando restricciones geométricas y cinemáticas. Se utilizan herramientas de CAD como SolidWorks o Fusion 360 para generar planos detallados y simulaciones iniciales.",
    },
    {
      icon: Hammer,
      titulo: "Ensamble",
      descripcion: "Integración mecánica de los componentes.",
      detalle:
        "Se lleva a cabo la integración física de las piezas diseñadas, garantizando la compatibilidad entre elementos y la funcionalidad estructural.",
    },
    {
      icon: BarChart3,
      titulo: "Análisis Dinámico",
      descripcion: "Simulación y extracción de resultados.",
      detalle:
        "Se simulan las condiciones dinámicas del sistema, como vibraciones, momentos y cargas. Se evalúa la estabilidad y eficiencia estructural.",
    },
    {
      icon: Box,
      titulo: "Prototipado",
      descripcion: "Fabricación y montaje del sistema.",
      detalle:
        "Se construye un prototipo a escala, validando la correspondencia entre los modelos digitales y el comportamiento real.",
    },
    {
      icon: Cog,
      titulo: "Pruebas",
      descripcion: "Validación experimental y ajustes finales.",
      detalle:
        "Se adquieren datos experimentales y se comparan con los resultados simulados, ajustando el rendimiento final del modelo.",
    },
  ];

  return (
    <section className="my-16 w-full text-center">
      <h3 className="text-xl font-semibold text-gray-100 mb-10">
        Etapas del Proyecto
      </h3>

      {/* Línea principal */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 max-w-6xl mx-auto">
        {/* Línea de conexión (solo visible en pantallas grandes) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

        {etapas.map((etapa, i) => {
          const Icon = etapa.icon;
          const isSelected = selected === i;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(isSelected ? null : i)}
              className={`relative z-10 cursor-pointer bg-gray-800 text-gray-200 rounded-2xl shadow-lg p-5 w-56 transition-all duration-300 hover:bg-gray-700 
                ${isSelected ? "ring-2 ring-cyan-400" : ""}
                ${i % 2 === 0 ? "md:translate-y-[-20px]" : "md:translate-y-[20px]"}
                ${selected !== null && !isSelected ? "opacity-40 scale-95" : "opacity-100"}
              `}
            >
              {/* Ícono circular */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-full mb-3 shadow-md inline-flex">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Título y descripción */}
              <h4 className="text-lg font-semibold">{etapa.titulo}</h4>
              <p className="text-sm text-gray-300 mt-2">{etapa.descripcion}</p>

              {/* Detalle expandible */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 bg-gray-900 text-gray-200 p-4 rounded-xl shadow-md w-72 text-sm text-left z-20"
                  >
                    {etapa.detalle}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
