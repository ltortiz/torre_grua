// app/construccion/page.tsx
"use client";
import { motion } from "framer-motion";
import { Wrench, HardHat } from "lucide-react";

export default function Modelo() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 text-center">
      {/* Íconos animados */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="text-orange-500 mb-4"
      >
        <Wrench size={80} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-gray-800"
      >
        Página en construcción
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-gray-600 mt-4 text-lg max-w-md"
      >
        Estamos trabajando para ofrecerte una mejor experiencia.  
        ¡Vuelve pronto para descubrir las novedades!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10"
      >
        <HardHat size={50} className="text-yellow-500 mx-auto" />
      </motion.div>
    </main>
  );
}
