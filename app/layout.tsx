import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cero Fricción - Cero Motivación",
  description: "Laboratorio de dinámica: Análisis dinámico de un puente grúa (Principio de energía, trabajo y potencia)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-200 min-h-screen flex justify-center items-start p-4">
        {/* Tarjeta principal */}
        <div className="bg-white w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden flex flex-col min-h-[95vh]">
          <Header />
          <Navbar />
          <main className="flex-1 p-6">{children}</main>
          <footer className="bg-gray-100 text-right py-4 pr-4 text-sm text-gray-500 border-t mt-8">
            Cero Fricción - Cero Motivación<br></br><i>Todos los derechos reservados</i><br></br>© {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
