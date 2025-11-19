"use client";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import Formula from "@/components/modelo/Formula";
import TooltipFormula from "@/components/modelo/TooltipFormula";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

type Formulario = {
  masa: string;
  tension: string;
  corriente: string;
  tiempo: string;
  f: string | null;
  v: string | null;
  pIn: string | null;
  pOut: string | null;
  n: string | null;
  mostrar: string | null;
};

export default function ModeloMatematicoPage() {
  const [tab, setTab] = useState(1);
  const [decimals] = useState(3);
  const [gravedad] = useState(9.81);
  const [altura] = useState(0.5);
  const [R] = useState(4.5);
  const [vnm] = useState(300);
  const [rt] = useState(0.02);
  const [rmp] = useState(30);
  const [rm] = useState(0.30);
  const [V] = useState(9);
  const [I] = useState(0.4);
  const [wm, setWm] = useState(0);
  const [wt, setWt] = useState(0);
  const [v, setV] = useState(0);
  const [pIn, setPIn] = useState(0);
  const [masas, setMasas] = useState([{
    g: 100,
    kg: 0.1,
    f: 0,
    wm: 0,
    p_out: 0,
    tau_t: 0,
    tau_m: 0,
    p_in_30: 0,
    p_in: 0
  }, {
    g: 200,
    kg: 0.2,
    f: 0,
    wm: 0,
    p_out: 0,
    tau_t: 0,
    tau_m: 0,
    p_in_30: 0,
    p_in: 0
  }, {
    g: 300,
    kg: 0.3,
    f: 0,
    wm: 0,
    p_out: 0,
    tau_t: 0,
    tau_m: 0,
    p_in_30: 0,
    p_in: 0
  }]);
  const [formularios, setFormularios] = useState<Formulario[]>([
    { masa: "", tension: "", corriente: "", tiempo: "", f: null, v: null, pIn: null, pOut: null, n: null, mostrar: null },
    { masa: "", tension: "", corriente: "", tiempo: "", f: null, v: null, pIn: null, pOut: null, n: null, mostrar: null },
    { masa: "", tension: "", corriente: "", tiempo: "", f: null, v: null, pIn: null, pOut: null, n: null, mostrar: null },
  ]);

  const handleChange = (
    index: number,
    campo: keyof Formulario,
    value: string
  ) => {
    const updated = [...formularios];
    updated[index][campo] = value;
    setFormularios(updated);
  };

  const handleCalcular = (index: number) => {
    const form = formularios[index];

    const masa = Number(form.masa);
    const tension = Number(form.tension);
    const corriente = Number(form.corriente);
    const tiempo = Number(form.tiempo);

    const f = Number((masa * gravedad).toFixed(decimals))
    const v = Number((altura / tiempo).toFixed(decimals))
    const pIn = Number((tension * corriente).toFixed(decimals))
    const pOut = Number(((masa * gravedad * altura) / tiempo).toFixed(decimals))
    const n = Number(((pOut / pIn) * 100).toFixed(decimals))

    const updated = [...formularios];
    updated[index].f = f.toString();
    updated[index].v = v.toString();
    updated[index].pIn = pIn.toString();
    updated[index].pOut = pOut.toString();
    updated[index].n = n.toString();
    setFormularios(updated);
  };

  return (
    <div className="w-full">
      <div className="flex gap-6 mb-8 border rounded-lg p-2 overflow-x-auto">
        {[
          { id: 1, label: "Modelo Matemático" },
          { id: 2, label: "Modelo Matemático Teórico" },
          { id: 3, label: "Modelo Matemático Experimental" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`pb-1 whitespace-nowrap ${tab === t.id
              ? "text-gray-900 border-b-2 border-black font-semibold"
              : "text-gray-500"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 1 && (
        <div key={1}>
          <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
            El modelo matemático es una representación abstracta y simplificada de un sistema real que se
            describe mediante expresiones matemáticas —como ecuaciones, funciones,
            matrices o algoritmos— con el propósito de analizar, predecir o comprender su comportamiento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-100 rounded-xl">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                Energia
              </h2>
              <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
                La energía mecánica es la capacidad de un sistema para realizar trabajo. Se clasifica principalmente en:
              </p>
              <div className="leading-relaxed max-w-3xl mx-auto">
                <ol className="list-inside list-decimal text-gray-700 text-justify text-sm md:text-base">
                  <li className="text-gray-950 text-justify font-semibold mb-6">
                    Energía Cinética <InlineMath math="E_{k}" />
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Asociada al movimiento de un cuerpo de masa <InlineMath math="m" />:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="E_{k} = \frac{1}{2} mv^2" />
                    </div>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-6">
                    Energía Potencial Gravitatoria <InlineMath math="E_{p}" />
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Energía asociada a la posición de un cuerpo en un campo gravitatorio:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="E_{p} = mgh" />
                    </div>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-6">
                    Energía Potencial Elástica
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      En un resorte deformado:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="E_{e} = \frac{1}{2}kx^2" />
                    </div>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-6">
                    Principio de Conservación de la Energía Mecánica
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Si no actúan fuerzas no conservativas:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="E_{k} + E_{p} = constante" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                Trabajo
              </h2>
              <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                El trabajo (W) representa la energía transferida por una fuerza que actúa
                sobre un cuerpo y produce un desplazamiento. Matemáticamente se expresa
                como la integral del producto escalar entre la fuerza y el desplazamiento:
              </p>
              <div className="text-gray-700">
                <BlockMath math="W = \int_{r_1}^{r_2} \vec{F} \cdot d\vec{r}" />
              </div>
              <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
                Donde:<br></br>
                <InlineMath math="W" />: Trabajo (Joules, J)<br></br>
                <InlineMath math="\vec{F}" />: Vector de fuerza (N)<br></br>
                <InlineMath math="d\vec{r}" />: Diferencial de desplazamiento (m)<br></br>
                <InlineMath math="r_1, r_2" />: Posición inicial y final
              </p>
              <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
                El concepto general de trabajo es único, pero se descompone en varias categorías para facilitar el análisis en diferentes situaciones.
              </p>
              <div className="leading-relaxed max-w-3xl mx-auto">
                <ol className="list-inside list-decimal text-gray-700 text-justify text-sm md:text-base ">
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Trabajo de una fuerza constante
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Cuando la fuerza es constante y el movimiento es en línea recta, la expresión se simplifica a:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="W = {F} \cdot {d} \cdot \cos(\theta)" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      Donde:<br></br>
                      <InlineMath math="F" />: Magnitud de la fuerza (N)<br></br>
                      <InlineMath math="d" />: Desplazamiento (m)<br></br>
                      <InlineMath math="\theta" />: Ángulo entre la fuerza y la dirección del movimiento
                    </p>
                    <p className="text-gray-700 text-justify font-normal">
                      Interpretación:<br></br>
                      El trabajo es máximo cuando la fuerza y el desplazamiento tienen la misma dirección (<InlineMath math="\theta = 0^\circ" />)
                      y nulo cuando son perpendiculares (<InlineMath math="\theta = 90^\circ" />).
                    </p>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Trabajo de una fuerza en función del desplazamiento entre dos puntos <InlineMath math="(1 \rightarrow 2)" />
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Cuando la fuerza varía con la posición, se calcula mediante la integral definida:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="W_{1 \rightarrow 2} = \int_{x_1}^{x_2} F(x) dx" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      Donde:<br></br>
                      <InlineMath math="F(x)" />: Función que describe cómo cambia la fuerza con el desplazamiento<br></br>
                      <InlineMath math="x_1, x_2" />: Posiciones inicial y final del movimiento
                    </p>
                    <p className="text-gray-700 text-justify font-normal">
                      Interpretación:<br></br>
                      El área bajo la curva <InlineMath math="F(x)" /> entre los puntos 1 y 2 representa el trabajo total realizado.
                    </p>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Trabajo de una fuerza peso
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      El peso de un cuerpo es una fuerza constante dirigida hacia abajo (<InlineMath math="\vec{P}=m\vec{g}" />).
                      Por lo tanto, el trabajo del peso al desplazarse verticalmente una distancia hes:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="W_{p} = mgh" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      Donde:<br></br>
                      <InlineMath math="m" />: Masa<br></br>
                      <InlineMath math="g" />: Gravedad<br></br >
                      <InlineMath math="h" />: Altura
                    </p>
                    <div className="text-gray-700 text-justify font-normal">
                      Interpretación:<br></br>
                      <ul className="list-inside  list-disc">
                        <li>El signo es positivo si el cuerpo desciende (el peso y el desplazamiento van en la misma dirección).</li>
                        <li>El signo es negativo si el cuerpo asciende (direcciones opuestas).</li>
                      </ul>
                    </div>
                  </li >
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Trabajo realizado por la fuerza de un resorte
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      La fuerza que ejerce un resorte (Ley de Hooke) es:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="F = - kx" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      Donde:<br></br>
                      <InlineMath math="k" />: Constante del resorte (N/m)<br></br>
                      <InlineMath math="x" />: Deformación respecto a la posición de equilibrio.
                    </p>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      El trabajo realizado por el resorte al moverse de <InlineMath math="x_1" /> a <InlineMath math="x_2" /> es:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="W = \int_{x_1}^{x_2} ( - kx) dx = - \frac{1}{2} k(x_{2}^{2} - x_{1}^{2})" />
                    </div>
                    <div className="text-gray-700 text-justify font-normal">
                      Interpretación:<br></br>
                      <ul className="list-inside list-disc font-normal">
                        <li>El signo negativo indica que la fuerza del resorte se opone al desplazamiento.</li>
                        <li>Si el resorte se comprime o estira, acumula energía potencial elástica.</li>
                      </ul>
                    </div>
                  </li >
                </ol >
              </div>
            </div >
            <div className="p-4 bg-gray-100 rounded-xl">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                Potencia
              </h2>
              <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                La potencia es la rapidez con la que se realiza trabajo o se transfiere energía.
              </p>
              <div className="text-gray-700">
                <BlockMath math="P = \frac{dW}{dt}" />
              </div>
              <div className="leading-relaxed max-w-3xl mx-auto">
                <ol className="list-inside list-decimal text-gray-700 text-justify text-sm md:text-base">
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Potencia para fuerzas constantes
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Si una fuerza constante produce desplazamiento a velocidad <InlineMath math="v" />:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="P = F \cdot v \cdot \cos(\theta)" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Caso particular, fuerza paralela al movimiento:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="P = Fv" />
                    </div>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Potencia mecánica en rotación
                    <p className="text-gray-700 text-justify font-normal mt-2">
                      Cuando el movimiento es rotacional:
                    </p>
                    <div className="text-gray-700">
                      <BlockMath math="P = \tau \cdot \omega" />
                    </div>
                    <p className="text-gray-700 text-justify font-normal mb-2">
                      Donde:<br></br>
                      <InlineMath math="\tau" />: Torque (N·m)<br></br>
                      <InlineMath math="\omega" />: Velocidad angular (rad/s)
                    </p>
                  </li>
                  <li className="text-gray-950 text-justify font-semibold mb-4">
                    Relación con energía
                    <div className="text-gray-700">
                      <BlockMath math="P = \frac{dE}{dt}" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div >
        </div >
      )}
      {tab === 2 && (
        <div key={2}>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Sistema de Izaje con Motorreductor y Engranajes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
            <div className="text-gray-700 text-justify text-sm md:text-base">
              <p className="mb-2">
                Una torre grúa a escala utiliza un motorreductor N20 de 300 rpm y torque nominal de 1.5 kg·cm,
                el cual transmite movimiento mediante un sistema de engranajes 72/16, con una relación de
                transmisión total de 4.5:1. El engranaje grande está unido al tambor de izaje,
                cuyo radio es de 0,02m, sobre el cual se enrolla la cuerda encargada de elevar la carga.
              </p>
              <p className="mb-2">
                El sistema es alimentado por una batería de 9V y su función es elevar masas de 100g, 200g y 300g a una altura fija de 0,5m.
                Usando esta configuración mecánica, determine para cada masa:
              </p>
              <ul className="list-inside list-decimal text-sm">
                <li>La fuerza requerida para el izaje.</li>
                <li>El trabajo mecánico realizado al elevar la carga.</li>
                <li>La velocidad angular del tambor y la velocidad lineal de elevación.</li>
                <li>La potencia mecánica de salida del sistema.</li>
                <li>El torque requerido en el tambor y el torque equivalente en el eje del motor.</li>
                <li>La potencia eléctrica de entrada, asumiendo un rendimiento del motor del 30%.</li>
                <li>La eficiencia teórica del sistema</li>
              </ul>
            </div>
            <img
              src="/ejemplo_teorico.jpg"
              alt="Ejemplo Teorico"
              className="rounded-xl shadow-md w-full h-auto object-contain"
            />
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 bg-gray-100 rounded-md p-1 mb-4 text-center">
            Desarrollo
          </h2>
          <div className="space-y-3 mb-4">
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                1. La fuerza requerida para el izaje
              </h2>
              <p className="text-gray-700 text-justify">
                La fuerza mínima necesaria para elevar una masa es su peso, es decir:
              </p>
              <div className="text-gray-700">
                <BlockMath math="F = mg" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="m" />: Masa (kg)<br></br>
                <InlineMath math="g" />: {gravedad} <InlineMath math="m/s^2" /> (Gravedad)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada masa:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Masa: <InlineMath math={`${item.g} \\,g = ${item.kg} \\,kg`} />
                      <Formula
                        latex={`F_{${item.g}} = ${item.kg} \\cdot ${gravedad}`}
                        calc="m * g"
                        vars={{ m: item.kg, g: gravedad }}
                        decimals={decimals}
                        unidad="N"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              f: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                2. El trabajo mecánico realizado al elevar la carga
              </h2>
              <p className="text-gray-700 text-justify">
                El trabajo que realiza el sistema al elevar la carga es:
              </p>
              <div className="text-gray-700">
                <BlockMath math="W = mgh" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="m" />: Masa (kg)<br></br>
                <InlineMath math="g" />: {gravedad} <InlineMath math="m/s^2" /> (Gravedad) <br></br>
                <InlineMath math="h" />: {altura} m (Altura)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada masa:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Masa: <InlineMath math={`${item.g} \\,g = ${item.kg} \\,kg`} />
                      <Formula
                        latex={`W_{${item.g}} = ${item.kg} \\cdot ${gravedad} \\cdot ${altura}`}
                        calc="m * g * h"
                        vars={{ m: item.kg, g: gravedad, h: altura }}
                        decimals={decimals}
                        unidad="J"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              wm: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                3. La velocidad angular del tambor y la velocidad lineal de elevación
              </h2>
              <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
                3.1. Velocidad angular del motor
              </h2>
              <div className="text-gray-700">
                <BlockMath math="\omega_{m} = n_{m} \cdot \frac{2\pi}{60}" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="n_{m}" />: {vnm} rpm (Revoluciones por minuto del motor)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Convertimos {vnm} rpm → rad/s:
              </p>
              <div className="text-gray-700">
                <Formula
                  latex={`\\omega_{m} = ${vnm} \\cdot \\frac{2\\pi}{60}`}
                  calc="vnm * ((pi * 2)/60)"
                  vars={{ vnm: vnm }}
                  decimals={decimals}
                  unidad="rad/s"
                  onSave={setWm}
                />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
                3.2. Velocidad angular del tambor
              </h2>
              <div className="text-gray-700">
                <BlockMath math="\omega_{t} = \frac{\omega_{m}}{R}" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="\omega_{m}" />: Velocidad angular del motor<br></br>
                <InlineMath math="R" />: {R} (Relación de engranajes 72/16)
              </p>
              <div className="p-4 bg-gray-200 rounded-xl text-gray-700 mb-4">
                <Formula
                  latex={`\\omega_{t} = \\frac{${wm}}{${R}}`}
                  calc="wm / R"
                  vars={{ wm: wm, R: R }}
                  decimals={decimals}
                  unidad="rad/s"
                  onSave={setWt}
                />
              </div>
              <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
                3.3. Velocidad lineal de elevación
              </h2>
              <div className="text-gray-700">
                <BlockMath math="v = \omega_{tambor} \cdot r" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="\omega_{tambor}" />: Velocidad angular del tambor<br></br>
                <InlineMath math="r" />: {rt} m (Radio del tambor)
              </p>
              <div className="p-4 bg-gray-200 rounded-xl text-gray-700">
                <Formula
                  latex={`v = ${wt} \\cdot ${rt}`}
                  calc="wt * r"
                  vars={{ wt: wt, r: rt }}
                  decimals={decimals}
                  unidad="m/s"
                  onSave={setV}
                />
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                4. La potencia mecánica de salida del sistema
              </h2>
              <p className="text-gray-700 text-justify">
                La fórmula más utilizada para potencia mecánica en sistemas de izaje es:
              </p>
              <div className="text-gray-700">
                <BlockMath math="P_{salida} = Fv" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="F" />: Fuerza necesaria para elevar la carga<br></br>
                <InlineMath math="v" />: {v} m/s (Velocidad lineal con la que sale la carga)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada fuerza:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Fuerza: <InlineMath math={`${item.g} \\,g \\rightarrow ${item.f} \\,N`} />
                      <Formula
                        latex={`P_{salida} = ${item.f} \\cdot ${v}`}
                        calc="f * v"
                        vars={{ f: item.f, v: v }}
                        decimals={decimals}
                        unidad="W"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              p_out: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                5. El torque requerido en el tambor y el torque equivalente en el eje del motor
              </h2>
              <p className="text-gray-700 text-justify mb-4">
                Para determinar el torque necesario para elevar la carga se calculan: El torque en el tambor y el torque equivalente que debe entregar el motor
              </p>
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                5.1. Torque en el tambor
              </h2>
              <div className="text-gray-700">
                <BlockMath math="\tau_{t} = Fr" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="F" />: Fuerza necesaria para elevar la carga<br></br>
                <InlineMath math="r" />: {rt} m (Radio del tambor)
              </p>
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                5.2. Torque equivalente en el motor
              </h2>
              <p className="text-gray-700 text-justify">
                Cuando hay reducción (relación 4.5:1):
              </p>
              <div className="text-gray-700">
                <BlockMath math="\tau_{m} = \frac{\tau_{t}}{R}" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="R" />: {R} (Relación de engranajes 72/16)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada fuerza:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Fuerza: <InlineMath math={`${item.g} \\,g \\rightarrow ${item.f} \\,N`} />
                      <Formula
                        latex={`\\tau_{t} = ${item.f} \\cdot ${rt}`}
                        calc="f * r"
                        vars={{ f: item.f, r: rt }}
                        decimals={decimals}
                        unidad="N\cdot m"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              tau_t: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                      <Formula
                        latex={`\\tau_{m} = \\frac{${item.tau_t}}{${R}}`}
                        calc="tau_t / R"
                        vars={{ tau_t: item.tau_t, R: R }}
                        decimals={decimals}
                        unidad="N\cdot m"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              tau_m: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                6. La potencia eléctrica de entrada, asumiendo un rendimiento del motor del 30%
              </h2>
              <p className="text-gray-700 text-justify mb-4">
                Asumiendo rendimiento del motor {rmp}% = {rm}
              </p>
              <div className="text-gray-700">
                <BlockMath math="P_{in} = \frac{P_{out}}{\eta}" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="P_{out}" />: Potencia mecánica de salida<br></br>
                <InlineMath math="\eta" />: {rm} (Rendimiento del motor)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada potencia de salida:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Potencia de salida: <InlineMath math={`${item.g} \\,g \\rightarrow ${item.p_out} \\,N`} />
                      <Formula
                        latex={`P_{in} = \\frac{${item.p_out}}{${rm}}`}
                        calc="p_out / rm"
                        vars={{ p_out: item.p_out, rm: rm }}
                        decimals={decimals}
                        unidad="W"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              p_in_30: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-3 bg-gray-100 rounded-md">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                7. La eficiencia teórica del sistema
              </h2>
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                7.1. Potencia de entrada
              </h2>
              <p className="text-gray-700 text-justify mb-4">
                Es la energía eléctrica que consume el motor durante el izaje, determinada por:
              </p>
              <div className="text-gray-700">
                <BlockMath math="P_{in} = V \cdot I" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="V" />: {V} (Voltaje)<br></br>
                <InlineMath math="I" />: {I} (Corriente bajo carga)
              </p>
              <div className="text-gray-700">
                <Formula
                  latex={`P_{in} = ${V} \\cdot ${I}`}
                  calc="V * I"
                  vars={{ V: V, I: I }}
                  decimals={decimals}
                  unidad="W"
                  onSave={setPIn}
                />
              </div>
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                7.2. Eficiencia teórica del sistema
              </h2>
              <div className="text-gray-700">
                <BlockMath math="\eta = \frac{P_{out}}{P_{in}}" />
              </div>
              <p className="text-gray-700 text-justify mb-4">
                Donde:<br></br>
                <InlineMath math="P_{out}" />: Potencia mecánica de salida<br></br>
                <InlineMath math="P_{in}" />: {pIn} W (Potencia de entrada)
              </p>
              <p className="text-gray-700 text-justify mb-2">
                Cálculo para cada potencia de salida:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {masas.map((item, i) => {
                  return (
                    <div key={i} className="p-4 bg-gray-200 rounded-xl text-gray-700">
                      Potencia de salida: <InlineMath math={`${item.g} \\,g \\rightarrow ${item.p_out} \\,N`} />
                      <Formula
                        latex={`\\eta = \\frac{${item.p_out}}{${pIn}}`}
                        calc="p_out / p_in"
                        vars={{ p_out: item.p_out, p_in: pIn }}
                        decimals={decimals}
                        unidad="\%"
                        onSave={(valor: any) => {
                          setMasas(prev => {
                            const nuevo = [...prev];
                            nuevo[i] = {
                              ...nuevo[i],
                              p_in: valor,
                            };
                            return nuevo;
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 bg-gray-100 rounded-md p-1 mb-4 text-center">
            Gráficas
          </h2>
          <div className="mb-4">
            <LineChart
              style={{ width: '100%', aspectRatio: 1.618, maxWidth: '100%' }}
              responsive
              data={masas}
              margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
            >
              <CartesianGrid stroke="#8f8f8f" strokeDasharray="4 4" />
              <Line type="monotone" dataKey="p_in" stroke="#1e2939" strokeWidth={2} />
              <XAxis dataKey="kg" type="number" ticks={[0].concat(masas.map((m, i) => m.kg))} label={{ value: 'Carga (Kg)', position: 'insideBottom', offset: -10, fill: "#374151", fontWeight: 600, fontSize: 18 }} tick={{ fill: "#374151" }} />
              <YAxis width="auto" label={{ value: 'Eficiencia (%)', position: 'insideLeft', angle: -90, dy: 50, fill: "#374151", fontWeight: 600, fontSize: 18 }} />
              <Tooltip content={({ active, payload, label }) => {
                if (!active || !payload || payload.length === 0) return null;
                return (
                  <div className="bg-white p-2 rounded-md shadow-md border border-gray-200">
                    <p className="text-gray-700 font-semibold">Carga: {label} kg</p>
                    <p className="text-gray-700">Eficiencia: {payload[0].value} %</p>
                  </div>
                );
              }} />
            </LineChart>
          </div>
        </div>
      )}
      {tab === 3 && (
        <div key={3}>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            Sistema de Izaje con Motorreductor y Engranajes
          </h2>
          <div className="text-gray-700 text-justify text-sm md:text-base">
            <p className="mb-2">
              El objetivo principal de este proyecto es <b>determinar y comparar la
                eficiencia de un sistema de izaje (torre grúa)</b> bajo diferentes
              condiciones de carga, contrastando un modelo de diseño ideal (Teórico)
              con mediciones reales (Experimental).
            </p>
            <div className="text-gray-700 text-justify text-sm md:text-base mb-4">
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Contexto:
              </h2>
              <p className="mb-2">
                Una torre grúa a escala utiliza un motorreductor N20 de 300 rpm y torque nominal de 1.5 kg·cm,
                el cual transmite movimiento mediante un sistema de engranajes 72/16, con una relación de
                transmisión total de 4.5:1. El engranaje grande está unido al tambor de izaje,
                cuyo radio es de 0,02m, sobre el cual se enrolla la cuerda encargada de elevar la carga.
              </p>
              <p className="mb-2">
                El sistema es alimentado por una batería de 9V y su función es elevar masas de 100g, 200g y 300g a una altura fija de 0,5m.
                Usando esta configuración mecánica, determine para cada masa:
              </p>
              <ul className="list-inside list-decimal text-sm">
                <li>La fuerza requerida para el izaje.</li>
                <li>La velocidad lineal de elevación.</li>
                <li>La potencia eléctrica de entrada del sistema.</li>
                <li>La potencia mecánica de salida del sistema.</li>
                <li>La eficiencia real del sistema.</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
            {formularios.map((form, col) => (
              <div key={col} className="border border-gray-600 rounded-xl shadow p-4 bg-white space-y-4">
                <h2 className="text-xl font-bold text-center text-gray-800">Escenario {col + 1}</h2>
                <div>
                  <label className="block text-base md:text-lg text-gray-700">Masa</label>
                  <select value={form.masa} onChange={(e) => handleChange(col, "masa", e.target.value)} className="w-full border border-gray-300 rounded p-2 bg-gray-100 text-gray-700">
                    <option value="" disabled>-- Seleccione --</option>
                    <option value="0.1">100 g → 0.1 Kg</option>
                    <option value="0.2">200 g → 0.2 Kg</option>
                    <option value="0.3">300 g → 0.3 Kg</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Tensión</label>
                  <input type="number" value={form.tension} min={0} onChange={(e) => handleChange(col, "tension", e.target.value)} className="w-full border border-gray-300 rounded p-2 bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Corriente</label>
                  <input type="number" value={form.corriente} min={0} onChange={(e) => handleChange(col, "corriente", e.target.value)} className="w-full border border-gray-300 rounded p-2 bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Tiempo</label>
                  <input type="number" value={form.tiempo} min={0} onChange={(e) => handleChange(col, "tiempo", e.target.value)} className="w-full border border-gray-300 rounded p-2 bg-gray-100 text-gray-700" />
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <button className="py-2 bg-gray-800 text-white rounded-lg" onClick={() => handleCalcular(col)}>
                    Calcular
                  </button>
                </div>
                {form.f !== null && form.v !== null && form.pIn !== null && form.pOut !== null && form.n !== null && (
                  <div className="pl-4 pt-2 pb-2 pr-4 bg-gray-100 border rounded">
                    <div className="flex justify-between items-center mb-2 text-gray-800">
                      <b>Resultados:</b>
                    </div>
                    <ul className="list-decimal list-outside pl-4 text-gray-700">
                      <li>
                        <div className="flex items-center gap-2">
                          <span>La fuerza requerida para el izaje</span>
                          <TooltipFormula latex={"F = m \\cdot g"}></TooltipFormula>
                        </div>
                        <Formula
                          latex={`F = ${form.masa} \\cdot ${gravedad}`}
                          calc="m * g"
                          vars={{ m: Number(form.masa), g: gravedad }}
                          decimals={decimals}
                          unidad="N"
                          onSave={(valor: any) => {
                            handleChange(col, "f", valor)
                          }}
                        />
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <span>La velocidad lineal de elevación</span>
                          <TooltipFormula latex={"v = \\frac{h}{t}"}></TooltipFormula>
                        </div>
                        <Formula
                          latex={`v = \\frac{${altura}}{${form.tiempo}}`}
                          calc="h / t"
                          vars={{ h: altura, t: Number(form.tiempo) }}
                          decimals={decimals}
                          unidad="m/s"
                          onSave={(valor: any) => {
                            handleChange(col, "v", valor)
                          }}
                        />
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <span>La potencia eléctrica de entrada</span>
                          <TooltipFormula latex={"P_{in} = V \\cdot I"}></TooltipFormula>
                        </div>
                        <Formula
                          latex={`P_{in} = ${form.tension} \\cdot ${form.corriente}`}
                          calc="t * c"
                          vars={{ t: Number(form.tension), c: Number(form.corriente) }}
                          decimals={decimals}
                          unidad="W"
                          onSave={(valor: any) => {
                            handleChange(col, "pIn", valor)
                          }}
                        />
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <span>La potencia mecánica de salida</span>
                          <TooltipFormula latex={"P_{out} = \\frac{m \\cdot g \\cdot h}{t}"}></TooltipFormula>
                        </div>
                        <Formula
                          latex={`P_{out} = \\frac{${form.masa} \\cdot ${gravedad} \\cdot ${altura}}{${form.tiempo}}`}
                          calc="(m * g * h)/t"
                          vars={{ m: Number(form.masa), g: gravedad, h: altura, t: Number(form.tiempo) }}
                          decimals={decimals}
                          unidad="W"
                          onSave={(valor: any) => {
                            handleChange(col, "pOut", valor)
                          }}
                        />
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <span>La eficiencia real del sistema</span>
                          <TooltipFormula latex={"\\eta = \\frac{P_{out}}{P_{in}}"}></TooltipFormula>
                        </div>
                        <Formula
                          latex={`\\eta = \\frac{${form.pOut}}{${form.pIn}}`}
                          calc="pOut / pIn"
                          vars={{ pOut: Number(form.pOut), pIn: Number(form.pIn) }}
                          decimals={decimals}
                          unidad="\%"
                          onSave={(valor: any) => {
                            handleChange(col, "n", valor)
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div >
  );
}
