"use client";

import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Props {
  latex: string;
}

export default function TooltipFormula({ latex }: Props) {
  return (<Tooltip.Provider delayDuration={200}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-500 text-white text-[10px] font-bold">
          i
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content side="right" align="center" className="bg-white border p-3 rounded shadow-xl text-sm max-w-xs">
          <div className="mb-1 font-semibold">Fórmula:</div>
          <BlockMath math={latex} />
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>)
}