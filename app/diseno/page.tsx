"use client";
import { useState } from "react";

interface Planos {
  name: string;
  img: string;
}

export default function Home() {
  const [selectedPlano, setSelectedPlano] = useState<Planos | null>(null);

  const images = [
    { name: "Plano Pluma", img: "/plano1.jpg" },
    { name: "Plano Estructura Base", img: "/plano2.jpg" },
    { name: "Plano Cabezal y Cabina", img: "/plano3.jpg" },
    { name: "Plano Ensamble General", img: "/plano4.jpg" }
  ];

  return (
    <main className="flex flex-col items-center text-center">
      <div className="relative w-full max-w-4xl p-6">
        <span className="absolute top-4 right-4 text-xs md:text-sm bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-3 py-1 rounded-full shadow-md animate-pulse z-50">
          Haz clic en cada plano para agrandar
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Planos
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed text-justify mb-8">
          A continuación se muestra la imagen con los planos generales de la torre
          grúa para referencia técnica y visualización estructural.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {images.map((plano, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-gray-300 cursor-pointer" onClick={() => setSelectedPlano(plano)}>
              <img src={plano.img} alt={plano.name} className="w-full h-auto transform transition-transform duration-300 hover:scale-105" />
              <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{plano.name}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedPlano && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50 p-4" onClick={() => setSelectedPlano(null)}>
          <p className="text-white text-lg md:text-xl font-semibold mb-4">{selectedPlano.name}</p>
          <img src={selectedPlano.img} alt={selectedPlano.name} className="max-h-[80%] max-w-[80%] rounded-lg shadow-lg mb-4" />
        </div>
      )}
    </main>
  );
}
