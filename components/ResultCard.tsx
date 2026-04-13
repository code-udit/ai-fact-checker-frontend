"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ResultType } from "@/types";

type Props = {
  result: ResultType;
};

const getScoreMeta = (score: number) => {
  if (score > 70) {
    return {
      color: "#ef4444",
      badge: "bg-red-500/20 text-red-400",
      label: "Low Trust",
    };
  }

  if (score > 40) {
    return {
      color: "#facc15",
      badge: "bg-yellow-500/20 text-yellow-400",
      label: "Medium Trust",
    };
  }

  return {
    color: "#22c55e",
    badge: "bg-green-500/20 text-green-400",
    label: "High Trust",
  };
};

export default function ResultCard({ result }: Props) {
  const meta = getScoreMeta(result.score);

  return (
    <div className="mt-6 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow flex items-center gap-6 hover:scale-[1.02] transition-transform duration-200">
      <div className="w-20 h-20">
        <CircularProgressbar
          value={result.score}
          text={`${result.score}%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: meta.color,
            trailColor: "#333",
          })}
        />
      </div>

      <div>
        <p className="text-lg font-semibold">
          Verdict:{" "}
          <span
            className={
              result.verdict === "False"
                ? "text-red-400 text-lg font-bold"
                : "text-green-400 text-lg font-bold"
            }
          >
            {result.verdict === "False" ? "❌ False" : "✅ True"}
          </span>
        </p>

        <p className="text-sm text-gray-400 mt-1">
          {result.summary}
        </p>

        <div className="mt-2">
          <span className={`px-2 py-1 text-xs rounded-full ${meta.badge}`}>
            {meta.label}
          </span>
        </div>
      </div>
    </div>
  );
}