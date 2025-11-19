"use client";
import { useState } from "react";
import { Layers, Hammer, BarChart3, Box, Cog } from "lucide-react";

export default function HomePage() {
  const [selected, setSelected] = useState<number | null>(null);

  const etapas = [{
    icon: Layers,
    titulo: "Diseño CAD",
    descripcion: "Modelado de piezas y ensamblajes.",
    detalle: "En esta fase se realiza el modelado 3D de cada componente, considerando restricciones geométricas y cinemáticas. Se generan planos y simulaciones preliminares.",
  },
  {
    icon: Hammer,
    titulo: "Ensamble",
    descripcion: "Integración mecánica de los componentes.",
    detalle: "Se integran las piezas diseñadas garantizando compatibilidad, funcionalidad estructural y correcto comportamiento dinámico.",
  },
  {
    icon: BarChart3,
    titulo: "Análisis Dinámico",
    descripcion: "Simulación y extracción de resultados.",
    detalle: "Se simulan cargas, vibraciones, esfuerzos y condiciones reales para validar estabilidad, desplazamientos y reacciones estructurales.",
  },
  {
    icon: Box,
    titulo: "Prototipado",
    descripcion: "Fabricación y montaje del sistema.",
    detalle: "Se realiza un prototipo a escala para validar mediciones, estructuras, dimensiones y comportamiento físico del sistema.",
  },
  {
    icon: Cog,
    titulo: "Pruebas",
    descripcion: "Validación experimental y ajustes finales.",
    detalle: "Se adquieren datos experimentales y se comparan con los modelos. Se realizan ajustes finales y optimización.",
  }];

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

      {/* Misión */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-6 text-center max-w-3xl mx-auto hover:scale-[1.02]">
        <div className="flex flex-col items-center space-y-2">
          <Cog className="w-10 h-10 text-gray-700" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Misión</h3>
          <p className="text-gray-700 text-justify text-sm md:text-base">
            Desarrollar un modelo dinámico de una torre grúa a escala, diseñado y ensamblado en SolidWorks,
            que permita analizar su comportamiento mecánico y validar los principios de equilibrio,
            estabilidad y movimiento aplicados a sistemas con carga suspendida, fortaleciendo las competencias
            en simulación y análisis estructural dentro del campo de la ingeniería mecánica.
          </p>
        </div>
      </div>

      {/* Etapas del Proyecto */}
      <div className="">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-10">
          Etapas del Proyecto
        </h3>
        <div className="relative mx-auto max-w-4xl">
          {/* Línea central solo escritorio */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[3px] bg-gray-300 -translate-x-1/2"></div>
          <div className="flex flex-col gap-12">
            {etapas.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex md:min-h-[100px]">
                  {/* Punto central */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 bg-blue-600 border-4 border-white rounded-full shadow"></div>
                  </div>
                  {/* Tarjeta */}
                  <div className={`w-full md:w-1/2 flex hover:scale-[1.02] ${isLeft ? "md:justify-end" : "md:justify-start md:ml-auto"}`}>
                    <div className={`w-full bg-gray-800 text-gray-200 border p-5 rounded-xl shadow ${isLeft ? "md:mr-3" : "md:ml-3"}`}>
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-full mb-3 shadow-md inline-flex">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold">{item.titulo}</h4>
                      <p className="text-sm md:text-base text-gray-200 mt-2 text-justify">
                        {item.descripcion}
                      </p>
                      <button onClick={() => setSelected(selected === index ? null : index)} className="text-sm md:text-base mt-3 text-blue-600 hover:underline">
                        {selected === index ? "Cerrar" : "Detalles"}
                      </button>
                      {selected === index && (
                        <p className="text-sm md:text-base mt-3 text-gray-200 text-justify">{item.detalle}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
