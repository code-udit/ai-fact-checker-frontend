"use client";

import { Claim } from "@/types";

type Props = {
  claims: Claim[];
};

export default function ClaimsList({ claims }: Props) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Claims Analysis</h2>

      {claims.map((item, index) => (
        <div
          key={item.claim + index}
          className="p-4 border border-gray-700 rounded-xl bg-white/5 backdrop-blur-md hover:shadow-lg hover:shadow-red-500/10 transition"
        >
          <p className="font-medium">
            {index + 1}. {item.claim}
          </p>

          <p className="text-sm mt-1">
            Verdict: {item.verdict}
          </p>

          <p className="text-sm text-gray-400 mt-1">
            {item.reason}
          </p>
        </div>
      ))}
    </div>
  );
}