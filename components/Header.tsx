"use client";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-zinc-900 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide text-white">
          AI Fact Checker
        </h1>

        <span className="text-sm text-gray-300">
          Developed By Udit U Gunagi
        </span>
      </div>
    </header>
  );
}
