"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { evaluate } from "mathjs";
import { useEffect, useMemo } from "react";

interface Props {
  latex: string;          // Fórmula en LaTeX
  calc: string;           // Fórmula que math.js va a evaluar
  vars?: Record<string, number>; // Variables opcionales
  decimals: number;
  unidad: string;
  onSave?: ((resultado: number) => void) | null;
}

export default function Formula({ latex, calc, vars = {}, decimals = 2, unidad = "", onSave = null }: Props) {
  const resultado = useMemo(() => {
    try {
      const valor = Number(evaluate(calc, vars));
      const result = Number((unidad.indexOf("%") >= 0 ? valor * 100 : valor).toFixed(decimals));
      return result;
    } catch (err) {
      return -1;
    }
  }, [calc, vars, decimals, unidad]);

  useEffect(() => {
    if (onSave && resultado !== null) {
      onSave(resultado);
    }
  }, [resultado]);

  // Fórmula que se renderiza: LaTeX original + resultado + unidad
  const finalLatex = `${latex} = ${resultado} ${(unidad ? "\\," + unidad : "")}`;

  return <BlockMath math={finalLatex} />;
}
