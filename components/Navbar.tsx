"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Fundamento", href: "/fundamento" },
    { name: "Modelo Matemático", href: "/modelo" },
    { name: "Diseño", href: "/diseno" },
    { name: "NPI", href: "/npi" },
  ];

  return (
    <nav className="bg-gray-800 text-gray-100 shadow-md rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Texto 'Menú' visible solo en móvil */}
          <span className="font-semibold text-lg tracking-wide md:hidden">
            Menú
          </span>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded hover:bg-gray-700 transition"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menú en pantallas grandes centrado */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition font-medium ${pathname === item.href
                    ? "text-white border-b-2 border-blue-400 pb-1"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden bg-gray-700 border-t border-gray-600 rounded-b-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 font-medium ${pathname === item.href
                  ? "text-white bg-gray-600"
                  : "text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
