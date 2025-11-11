import Image from "next/image";

export default function FundamentoPage() {
  return (
    <section className="flex flex-col items-center text-justify space-y-16">
      {/* Encabezado */}
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Fundamentos del Proyecto
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Conoce los principios que dan estructura y coherencia al proyecto.  
          Una guía visual y conceptual para entender cómo se organizan las capas,
          la arquitectura y el propósito detrás de cada decisión técnica.
        </p>
      </div>

      {/* Sección 1 - Imagen izquierda */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/fundamento1.png"
            alt="Estructura conceptual"
            width={500}
            height={300}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Estructura y organización
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            La arquitectura está diseñada para mantener una separación clara 
            entre las capas del sistema. Esto permite que cada parte del proyecto 
            evolucione sin afectar negativamente a las demás, logrando así un 
            entorno modular, escalable y mantenible a largo plazo.
          </p>
        </div>
      </div>

      {/* Sección 2 - Imagen derecha */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/fundamento2.png"
            alt="Diseño limpio y modular"
            width={500}
            height={300}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Diseño modular y escalable
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Cada componente fue pensado para ser reutilizable y fácil de integrar.  
            Este enfoque modular reduce la duplicación de código y facilita la 
            colaboración entre equipos, asegurando que la evolución del proyecto 
            sea más ágil y controlada.
          </p>
        </div>
      </div>

      {/* Sección 3 - Imagen centrada */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Image
          src="/fundamento3.png"
          alt="Proceso de desarrollo"
          width={800}
          height={400}
          className="rounded-xl shadow-md object-cover w-full"
        />
        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
          Además, el proyecto adopta una mentalidad orientada al crecimiento y la 
          mejora continua. El aprendizaje constante y la integración de buenas 
          prácticas permiten optimizar tanto el código como la experiencia de 
          usuario, manteniendo un equilibrio entre funcionalidad y estética.
        </p>
      </div>
    </section>
  );
}
