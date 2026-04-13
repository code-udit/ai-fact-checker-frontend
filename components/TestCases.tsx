"use client";

import { useState, useRef } from "react";

/* ---------------------- Test Case Data ---------------------- */

const textCases = [
`BREAKING: Drinking water after 10 PM causes instant heart failure! Doctors hate this simple trick. 100% of people who tried this ended up in the hospital!!!`,
`Eating chocolate daily boosts intelligence by 200% and guarantees success in exams. Scientists don’t want students to know this secret trick. Try it now!`,
`Experts confirm that drinking warm water every morning can improve digestion. Some studies suggest it may help metabolism, but results vary.`,
`A new virus has been discovered and experts warn it could spread rapidly. Social media claims it will wipe out entire populations.`,
`BREAKING NEWS: A miracle supplement can cure all diseases overnight with 100% success and zero side effects!`,
`Scientists say using mobile phones for long hours may slightly affect sleep quality. Experts recommend limiting screen time before bed.`,
`You won’t believe what this simple habit does! This secret method is hidden from the public. Try it now before it’s too late!`,
`A study suggests regular exercise reduces heart disease risk. However, results depend on lifestyle and genetics.`,
`URGENT: This AI tool will replace 90% of jobs within a year! Millions will lose careers overnight. Act now!`,
`Drinking green tea regularly may improve metabolism and reduce disease risk, but should be combined with a balanced diet and exercise.`
];

const urlCases = [
"https://en.wikipedia.org/wiki/Artificial_intelligence",
"https://en.wikipedia.org/wiki/Global_warming",
"https://www.britannica.com/science/climate-change",
"https://www.healthline.com/nutrition/green-tea-benefits",
"https://www.bbc.com/news/science-environment-56837908",
"https://www.theguardian.com/technology/artificial-intelligence",
"https://medium.com/@towardsdatascience/what-is-artificial-intelligence-why-it-matters-1c9b6f",
"https://www.dailymail.co.uk/news/index.html",
"https://www.webmd.com/diet/features/health-benefits-of-green-tea",
"https://www.cnn.com/health"
];

/* ---------------------- Component ---------------------- */

export default function TestCases() {
  const [active, setActive] = useState<"text" | "url" | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const togglePanel = (type: "text" | "url") => {
    if (active === type) {
      setActive(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActive(type);
    }
  };

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="w-full flex flex-col items-end gap-4 mt-4">

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => togglePanel("text")}
          className={`text-sm px-4 py-2 rounded-lg border transition ${
            active === "text"
              ? "bg-blue-500/20 border-blue-400 text-blue-300"
              : "border-gray-600 hover:bg-gray-800"
          }`}
        >
          Text Test Cases
        </button>

        <button
          onClick={() => togglePanel("url")}
          className={`text-sm px-4 py-2 rounded-lg border transition ${
            active === "url"
              ? "bg-green-500/20 border-green-400 text-green-300"
              : "border-gray-600 hover:bg-gray-800"
          }`}
        >
          URL Test Cases
        </button>
      </div>

      {/* Panel */}
      {active && (
        <div
          ref={panelRef}
          className="w-full max-w-md max-h-[420px] overflow-y-auto rounded-xl border border-gray-700 bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-md p-4 space-y-3 shadow-lg"
        >
          {(active === "text" ? textCases : urlCases).map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                {item}
              </p>

              <button
                onClick={() => copy(item)}
                className="text-xs px-3 py-1.5 rounded-md border border-gray-600 hover:bg-gray-700 transition whitespace-nowrap"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}