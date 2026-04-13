"use client";

import { Highlight } from "@/types";

type Props = {
  highlights: Highlight[];
};

const getColor = (type: string) => {
  if (type === "Clickbait") return "text-orange-400";
  if (type === "Fear") return "text-red-400";
  if (type === "Exaggeration") return "text-yellow-400";
  return "text-red-400";
};

export default function PatternsList({ highlights }: Props) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Detected Patterns</h2>

      {highlights.map((item, index) => (
        <div
          key={item.word + index}
          className="p-3 border rounded-lg flex justify-between bg-white/5 backdrop-blur-md hover:bg-zinc-800 transition"
        >
          <span className="font-medium">{item.word}</span>
          <span className={`text-sm ${getColor(item.type)}`}>
            {item.type}
          </span>
        </div>
      ))}
    </div>
  );
}