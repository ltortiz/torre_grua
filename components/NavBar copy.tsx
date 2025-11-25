// components/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Fundamento", href: "/fundamento" },
  { label: "Modelo Matemático", href: "/modelo" },
  { label: "Diseño", href: "/diseno" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-6 bg-gray-800 text-gray-100 py-3 shadow-md">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-1 rounded-md transition ${active
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-700 hover:text-white"
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
