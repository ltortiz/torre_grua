// app/construccion/page.tsx
"use client";
import './style.css';
import { Wrench, HardHat } from "lucide-react";

export default function Diseno() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 text-center">
      {/* Íconos animados */}
      <div className="icon-container text-orange-500 mb-4">
        <Wrench size={80} className="wrench-icon" />
      </div>

      <h1 className="title">Página en construcción</h1>

      <p className="description">
        Estamos trabajando para ofrecerte una mejor experiencia.
        ¡Vuelve pronto para descubrir las novedades!
      </p>

      <div className="hardhat-container mt-10">
        <HardHat size={50} className="hardhat-icon text-yellow-500 mx-auto" />
      </div>
    </main>
  );
}
