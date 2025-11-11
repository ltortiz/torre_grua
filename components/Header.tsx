"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-100 text-gray-800 py-4 px-6 rounded-t-2xl shadow-md">
      {/* Contenedor principal responsive */}
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-1">

        {/* Contenedor de logos (solo visible como grupo en mobile) */}
        <div className="flex justify-between w-full md:hidden">
          <Image
            src="/logo-uts.png"
            alt="UTS"
            width={80}
            height={80}
            className="object-contain"
          />
          <Image
            src="/logo-em.png"
            alt="IEM"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Imagen izquierda (solo visible en pantallas grandes) */}
        <div className="hidden md:block">
          <Image
            src="/logo-uts.png"
            alt="UTS"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Texto central */}
        <div className="flex flex-col items-center md:items-center text-center flex-1">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 tracking-wide">
            Semillero  de  Investigación  en  Diseño  y  Selección  de Materiales para Ingeniería (DIMAIN)
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            Director: Pamela Mara Hulse
          </p>
        </div>

        {/* Imagen derecha (solo visible en pantallas grandes) */}
        <div className="hidden md:block">
          <Image
            src="/logo-em.png"
            alt="IEM"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
