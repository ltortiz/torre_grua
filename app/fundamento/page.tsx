import Image from "next/image";

export default function FundamentoPage() {
  return (
    <section className="flex flex-col items-center text-justify space-y-6">
      {/* Encabezado */}
      <div className="text-center max-w-4xl mx-auto space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Fundamento
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
          Esta sección presenta los conceptos esenciales que sustentan el análisis desarrollado en el proyecto,
          abordando principios físicos fundamentales como la energía, el trabajo y la potencia.
          Su comprensión permite interpretar correctamente el comportamiento del sistema estudiado y establece la base
          conceptual necesaria para el desarrollo de los cálculos, la experimentación y la discusión de resultados.
        </p>
      </div>
      {/* Sección 1 - Imagen izquierda */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <img src="/energia.jpg" alt="Energia" className="rounded-xl shadow-md object-fit w-full max-w-3xl h-64 md:h-120 transition-transform duration-500 hover:scale-[1.02]" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Energía
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El concepto de energía, tal como se entiende hoy, es el resultado de un
            desarrollo histórico extenso dentro de la física clásica. Aunque la palabra
            proviene del griego energeia empleada por Aristóteles, su significado moderno
            surgió entre los siglos XVIII y XIX. La energía se define como la
            capacidad de un sistema para realizar trabajo o producir cambios en otros sistemas.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El fundamento teórico principal asociado a la energía es el
            <b>Principio de Conservación de la Energía</b>, formulado con claridad en el
            siglo XIX por científicos como Julius Robert Mayer, Hermann von Helmholtz y James Prescott Joule.
            Joule confirmó este principio mediante su célebre experimento de la <b>rueda de paletas sumergida en agua</b>,
            en el cual demostró que una cantidad definida de trabajo mecánico
            genera una cantidad equivalente de calor, estableciendo así la equivalencia entre diferentes formas de energía.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            Este principio establece que <b>la energía no se crea ni se destruye, sino que se transforma.</b>
            Las ecuaciones modernas que describen la energía provienen de la <b>mecánica clásica formulada por Isaac Newton</b>,
            en la cual aparecen la energía cinética y potencial. La energía potencial gravitatoria,
            por ejemplo, surge directamente del campo gravitatorio descrito por la Ley de Gravitación Universal de Newton.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            La energía es una magnitud escalar cuya unidad en el Sistema Internacional es el joule (J), en honor a James Joule.
          </p>
        </div>
      </div>

      {/* Sección 2 - Imagen derecha */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <img src="/trabajo.jpg" alt="Trabajo" className="rounded-xl shadow-md object-fit w-full max-w-3xl h-64 md:h-120 transition-transform duration-500 hover:scale-[1.02]" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Trabajo Mecánico
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El concepto de trabajo mecánico fue introducido de manera rigurosa durante el desarrollo de la mecánica clásica.
            Aunque existían ideas previas relacionadas con el esfuerzo y la resistencia, la definición moderna surgió en el
            siglo XIX gracias a <b>Gaspard-Gustave de Coriolis</b>, quien estableció que el trabajo corresponde a la energía
            transferida por una fuerza cuando esta produce un desplazamiento.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El trabajo está directamente vinculado con la <b>Segunda Ley de Newton</b>, ya que las fuerzas son responsables
            de modificar el estado de movimiento de los cuerpos. Así, el trabajo constituye una medida cuantitativa de esa
            transferencia de energía. Si la fuerza favorece el desplazamiento, el trabajo se considera positivo; si se opone, es negativo.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            Históricamente, los primeros indicios del concepto surgieron a partir de los experimentos de <b>Galileo Galilei</b>
            con planos inclinados, los cuales mostraron que una fuerza aplicada de manera constante puede modificar progresivamente
            la energía de un cuerpo. Más adelante, los estudios sobre máquinas simples —como poleas, palancas y tornos— permitieron
            comprender que el trabajo constituye la base del análisis energético dentro de la mecánica.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El trabajo se expresa en <b>joules</b>, ya que representa una transferencia directa de energía.
          </p>
        </div>
      </div>

      {/* Sección 3 - Imagen izquierda */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <img src="/potencia.jpg" alt="Potencia" className="rounded-xl shadow-md object-fit w-full max-w-3xl h-64 md:h-120 transition-transform duration-500 hover:scale-[1.02]" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Potencia
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            La potencia es la magnitud que cuantifica la rapidez con la cual se realiza trabajo o se
            transfiere energía en un sistema. Este concepto adquirió relevancia durante la Revolución Industrial,
            cuando <b>James Watt</b> desarrolló mejoras significativas en las máquinas de vapor y necesitó un método
            para comparar el rendimiento de estas con el de los caballos de carga. De este esfuerzo surgió la primera
            definición práctica de potencia y la unidad tradicional conocida como horsepower o caballo de fuerza.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            La potencia se asocia directamente con la capacidad de un sistema para realizar un trabajo en un
            intervalo de tiempo determinado. En sistemas rotacionales, también se relaciona con el producto
            entre torque y velocidad de giro, lo que la convierte en una variable central en la caracterización
            de motores eléctricos, máquinas térmicas y sistemas mecánicos en general.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            El estudio de la potencia se integró posteriormente con el <b>Primer Principio de la Termodinámica</b>,
            que establece que la energía interna de un sistema varía en función del calor y del trabajo intercambiados.
            Investigadores como Sadi Carnot, Rudolf Clausius y Lord Kelvin contribuyeron a clarificar cómo las
            máquinas reales transforman energía y con qué eficiencia pueden hacerlo, lo cual dio un fundamento
            sólido al concepto de potencia dentro del análisis energético.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-1">
            En el Sistema Internacional, la potencia se mide en <b>watts (W)</b>, en honor a James Watt.
          </p>
        </div>
      </div>

      {/* Sección 4 - Imagen centrada */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
          En síntesis, los principios de energía, trabajo y potencia proporcionan el marco conceptual
          que permite comprender y cuantificar el comportamiento mecánico del sistema analizado.
          Estos fundamentos no solo articulan la relación entre las variables físicas involucradas,
          sino que también facilitan la interpretación de los fenómenos observados y respaldan la
          validez de los procedimientos experimentales y de cálculo empleados en el proyecto.
        </p>
      </div>
    </section>
  );
}
