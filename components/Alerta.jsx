import { useState, useEffect } from "react";

export default function Alerta({ mensaje, tipo, onClose }) {
  // const [visible, setVisible] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => setVisible(false), 3000);
    const timer = setTimeout(() => onClose(), 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // if (!visible) return null;

  const bgColor =
    tipo === "error" ? "bg-red-500" :
      tipo === "success" ? "bg-green-500" :
        "bg-blue-500";

  return (
    <div className={`${bgColor} text-white px-4 py-3 rounded mb-4 shadow-lg`}>
      {mensaje}
    </div>
  );
}
