"use client";

import { Highlight } from "@/types";

type Props = {
  text: string;
  highlights: Highlight[];
};

export default function HighlightedText({ text, highlights }: Props) {
  const getHighlightedText = () => {
    let result = text;

    highlights.forEach((h) => {
      let color = "text-red-400";
      if (h.type === "Clickbait") color = "text-orange-400";
      if (h.type === "Fear") color = "text-red-400";
      if (h.type === "Exaggeration") color = "text-yellow-400";

      const escapedWord = h.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escapedWord})`, "gi");

      result = result.replace(
        regex,
        `<span class="${color} font-semibold">$1</span>`
      );
    });

    return result;
  };

  return (
    <div className="mt-6 p-5 border border-gray-700 rounded-xl bg-white/5 backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-2">
        Highlighted Text
      </h2>

      <p className="text-sm leading-relaxed">
        <span
          dangerouslySetInnerHTML={{ __html: getHighlightedText() }}
        />
      </p>
    </div>
  );
}